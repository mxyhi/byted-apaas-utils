import type {
  _IKAllEndpoint,
  _IKSyncEndpoint,
  _IKQuery,
} from '@byted-apaas/server-sdk-node/context/db/impl/IObject';
import type { _Cond } from '@byted-apaas/server-sdk-node/types/types';
import {
  CreateRecordMap,
  FilterCond,
  ObjectApiNames,
  ResultData,
  SelectCond,
  SortCond,
  UpdateRecordCond,
  UpdateRecordMap,
  metadataMap,
} from './type';
import { BatchResult } from '@byted-apaas/server-sdk-node/common/structs';

/**
 * 操作指定对象的记录数据
 * @param objectApiName 指定对象的 ApiName
 * @example
 * ```
 * object('_user').where({
 *     gender: 'male'
 * }).find()
 * ```
 */
const object = <T extends ObjectApiNames>(model: T) => {
  // @ts-ignore
  return application.data.object<T>(model);
};

class BaseModelService<T extends ObjectApiNames> {
  /**
   * 模型对象
   */
  readonly model;

  /**
   * 模型名称
   */
  readonly modelName;

  constructor({ model }: { model: T }) {
    this.modelName = model;
    this.model = this.object(model);
  }

  /**
   * 用户级鉴权
   */
  useUserAuth() {
    const service = new BaseModelService<T>({ model: this.modelName });
    (service.model as unknown) = service.model.useUserAuth();
    return service;
  }

  /**
   * 系统级鉴权
   */
  useSystemAuth() {
    const service = new BaseModelService<T>({ model: this.modelName });
    (service.model as unknown) = service.model.useSystemAuth();
    return service;
  }

  /**
   * 操作指定对象的记录数据
   * @param objectApiName 指定对象的 ApiName
   * @example
   * ```
   * object('_user').where({
   *     gender: 'male'
   * }).find()
   * ```
   */
  object(model: T) {
    return object<T>(model);
  }

  /**
   * 查找所有符合条件的记录
   * @param filter 筛选条件
   * @param select 需返回的字段
   * @param sort 排序字段
   * @param desc 是否降序 默认`false`：升序;`true`：降序
   * @returns 返回所有符合条件的记录
   */
  async find<U extends SelectCond<T>>(
    filter: FilterCond<T> = {},
    select: U[] = [],
    sort: U[] = [],
    desc: boolean = false
  ) {
    const returnData: ResultData<T, U>[] = [];

    return this.findStream({
      filter,
      select,
      sort,
      desc,
      handler(records) {
        returnData.push(...(records as ResultData<T, U>[]));
      },
    }).then(() => returnData);
  }

  /**
   * 流式查找所有符合条件的记录
   * @param param0
   * @param param0.filter 筛选条件
   * @param param0.select 需返回的字段
   * @param param0.sort 排序字段
   * @param param0.desc 是否降序 默认`false`：升序;`true`：降序
   * @param param0.handler 处理每次查询到的记录
   * @returns
   */
  findStream<U extends SelectCond<T>>({
    filter = {},
    select = [],
    sort = [],
    desc = false,
    handler,
  }: {
    filter?: FilterCond<T>;
    select?: U[];
    sort?: U[];
    desc?: boolean;
    handler: (records: ResultData<T, U>[]) => Promise<void> | void;
  }) {
    const options = this.model.where(filter).select(select),
      sortOptions = desc ? options.orderByDesc(sort) : options.orderBy(sort);

    return sortOptions.findStream(handler as any);
  }

  /**
   * 查找一个符合条件的记录
   * @param filter 筛选条件
   * @param select 需返回的字段
   * @returns 返回一个符合条件的记录
   */
  async findOne<U extends SelectCond<T>>(
    filter: FilterCond<T> = {},
    select: U[] = []
  ) {
    return this.model
      .where(filter)
      .select(select)
      .findOne()
      .then(result => result as ResultData<T, U>);
  }

  /**
   * 分页查找符合条件的记录
   * @param param
   * @param param.filter 筛选条件
   * @param param.select 需返回的字段
   * @param param.pageSize 每页条数
   * @param param.page 页码
   * @param param.sort 排序字段
   * @param param.desc 是否降序 默认`false`：升序;`true`：降序
   * @returns 返回符合条件的总数和当前页的记录
   */
  async findLimit<U extends SelectCond<T>>({
    filter = {},
    select = [],
    pageSize = 200,
    page = 1,
    sort = [],
    desc = false,
  }: {
    filter?: FilterCond<T>;
    select?: U[];
    pageSize?: number;
    page?: number;
    sort?: U[];
    desc?: boolean;
  } = {}) {
    const returnData: ResultData<T, U>[] = [],
      filterOptions = this.model.where(filter as {}),
      sortOptions = desc
        ? filterOptions.orderByDesc(...sort)
        : filterOptions.orderBy(...sort);

    return Promise.all([
      filterOptions.count(),
      sortOptions
        .select(select)
        .offset((page - 1) * pageSize)
        .limit(pageSize)
        .findStream(async records => {
          returnData.push(...(records as ResultData<T, U>[]));
        }),
    ]).then(([total]) => {
      return {
        /**
         * 符合条件的总数
         */
        total,
        /**
         * 当前页的记录
         */
        list: returnData,
      };
    });
  }

  /**
   * 计算符合条件的记录数
   * @param filter 筛选条件
   * @returns 返回符合条件的记录数
   */
  async count(filter: FilterCond<T> = {}) {
    return this.model.where(filter).count();
  }

  /**
   * 指定 _id 后，更新对应记录
   * @param recordMap 用于更新的一条记录，需对 _id 赋值
   * @paramExample {_id: 1660000000, _name: 'John', age: 19, gender: 'male'}
   * @example
   * ```
   * updateOneById({
   *     _id: 1660000000,
   *     gender: 'male'
   * })
   * ```
   */
  async updateOneById(recordMap: UpdateRecordCond<T>): Promise<void>;

  /**
   * 指定 _id 后，更新对应记录
   * @param _id 主键
   * @param recordMap 用于更新的一条记录
   * @paramExample {_name: 'John', age: 19, gender: 'male'}
   * @example
   * ```
   * updateOneById(1660000000, {
   *     gender: 'male'
   * })
   * ```
   */
  async updateOneById(
    _id: number,
    recordMap: UpdateRecordMap<T>
  ): Promise<void>;

  async updateOneById(
    idOrRecord: number | UpdateRecordCond<T>,
    recordMap?: UpdateRecordMap<T>
  ) {
    if (typeof idOrRecord !== 'number') {
      if (!(idOrRecord as any)._id) throw Error('_id is required');

      return this.model.update(idOrRecord);
    }

    if (!recordMap) throw Error('recordMap is required');

    return this.model.update(idOrRecord, recordMap as _Cond<metadataMap[T]>);
  }

  /**
   * 更新符合条件的一条记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   * @returns 0：未找到符合条件的记录
   */
  async updateOne(filter: FilterCond<T>, updateData: UpdateRecordMap<T>) {
    if (!filter || !Reflect.ownKeys(filter).length)
      throw Error('filter is required and can not be empty');

    const targetRecord = await this.findOne(filter, ['_id'] as any);

    if (!targetRecord) return 0;

    // @ts-ignore
    const { _id } = targetRecord;

    if (!_id) throw Error('_id is required');

    return this.model.update(_id, updateData);
  }

  /**
   * 根据筛选条件更新多条记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   */
  async updateMany(filter: FilterCond<T>, updateData: UpdateRecordMap<T>) {
    // @ts-ignore
    const recordList = await this.find(filter, ['_id']);

    return this.batchUpdate(
      recordList.map(item => ({
        ...updateData,
        // @ts-ignore
        _id: item._id,
      }))
    );
  }

  /**
   * 根据 _id 批量更新记录
   * @param recordMapList 多条用于更新的记录数据组成的数组，记录数据需对 _id 赋值
   * @paramExample [{_id: 1001, _name: 'John', gender: 'male'}, {_id: 1002, _name: 'Alis', gender: 'female'}]
   */
  async batchUpdate(recordMapList: UpdateRecordCond<T>[]) {
    if (!recordMapList.every(item => item._id)) throw Error('_id is required');

    let updateList = [];
    const result = [];

    for (let i = 0; i < recordMapList.length; ) {
      updateList = recordMapList.slice(i, i + 500);
      const res = await this.model.batchUpdate(updateList);
      result.push(res);
      i += 500;
    }

    return result;
  }

  /**
   * 创建记录
   * @param recordMap 用于创建的一条记录
   * @paramExample {_name: 'John', age: 19, gender: 'male'}
   * @example
   * create({
   *     _name: new application.constants.type.Multilingual({ zh: '部门' }),
   *     _manager: { _id: 1660000000 },
   *     _status: '_active'
   * })
   */
  create(recordMap: _Cond<metadataMap[T]>) {
    return this.model.create(recordMap);
  }

  /**
   * 批量创建记录
   * @param recordMapList 多条用于创建的记录数据组成的数组
   * @paramExample `[{_name: 'John', age: 19, gender: 'male'}, {_name: 'Alis', age: 16, gender: 'female'}]`
   */
  async batchCreate(recordMapList: CreateRecordMap<T>[]) {
    if (!recordMapList.every(item => item._id)) throw Error('_id is required');

    let updateList = [];
    const result = [];
    for (let i = 0; i < recordMapList.length; ) {
      updateList = recordMapList.slice(i, i + 500);
      const res = await this.model.batchCreate(updateList);
      result.push(res);
      i += 500;
    }
    return result;
  }

  /**
   * 删除记录
   * @param recordID 用于删除的一条记录的 ID
   * @example
   * deleteOneById(123456789123)
   */
  deleteOneById(recordID: number): Promise<void>;
  /**
   * 删除记录
   * @param record 用于删除的一条完整记录
   * @example
   * deleteOneById(context.targetRecord.original)
   */
  deleteOneById(record: _Cond<T>): Promise<void>;

  deleteOneById(recordOrId: number | _Cond<T>) {
    return this.model.delete(recordOrId);
  }

  /**
   * 删除符合条件的一条记录
   * @param filter 筛选条件
   * @returns 0：未找到符合条件的记录
   */
  async deleteOne(filter: FilterCond<T>) {
    const target = await this.findOne(filter, ['_id'] as any);
    if (!target) return 0;

    return this.deleteOneById((target as any)._id);
  }

  /**
   * 根据 _id 批量更新记录
   * @param recordMapList 多条用于更新的记录数据组成的数组，记录数据需对 _id 赋值
   * @paramExample [{_id: 1001, _name: 'John', gender: 'male'}, {_id: 1002, _name: 'Alis', gender: 'female'}]
   */
  async batchDelete(recordMapList: UpdateRecordCond<T>[] | number[]) {
    if (!recordMapList.every(item => typeof item === 'object' && item._id))
      throw Error('_id is required');

    let updateList = [];
    const result = [];

    for (let i = 0; i < recordMapList.length; ) {
      updateList = recordMapList.slice(i, i + 500);
      const res = await this.model.batchDelete(updateList);
      result.push(res);
      i += 500;
    }

    return result;
  }

  /**
   * 删除符合条件的所有记录
   * @param filter 筛选条件
   */
  async deleteMany(filter: FilterCond<T>) {
    const targetList = await this.find(filter, ['_id'] as any);

    return this.batchDelete(targetList.map(item => (item as any)._id));
  }
}

/**
 * node constructor function
 * @param model object api name
 * @example
 * ```js
 * class UserService extends createModelServiceClass("_user") {}
 * ```
 */
// @ts-ignore
const createModelServiceClass = <T extends ObjectApiNames>(model: T) =>
  class extends BaseModelService<T> {
    constructor() {
      super({ model });
    }
  };

/**
 * 获取对象模型实例
 * @param model object api name
 * @returns model
 */
const createModelService = <T extends ObjectApiNames>(
  model: T
): BaseModelService<T> => new BaseModelService<T>({ model });

export {
  BaseModelService,
  object,
  createModelServiceClass,
  createModelService,
};
