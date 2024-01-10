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

  constructor({ model }: { model: T }) {
    this.model = this.object(model);
  }

  // useUserAuth() {
  //   (this.model as any) = this.model.useUserAuth();
  //   return this;
  // }

  // useSystemAuth() {
  //   (this.model as any) = this.model.useSystemAuth();
  //   return this;
  // }

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
   * @returns 返回所有符合条件的记录
   */
  async find<U extends SelectCond<T>>(
    filter: FilterCond<T> = {},
    select: U[] = [],
    sort: SortCond<T> = {}
  ) {
    const returnData: ResultData<T, U>[] = [],
      keys = Object.keys(sort as {}),
      descKeys = keys.filter(key => (sort as any)[key] === -1),
      sortKeys = keys.filter(key => (sort as any)[key] === 1);

    return this.model
      .where(filter)
      .select(select as string[])
      .orderBy(sortKeys as any)
      .orderByDesc(descKeys as any)
      .findStream(async records => {
        returnData.push(...(records as ResultData<T, U>[]));
      })
      .then(() => returnData);
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
      .select(select as string[])
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
   * @returns 返回符合条件的总数和当前页的记录
   */
  async findLimit<U extends SelectCond<T>>({
    filter = {},
    select = [],
    pageSize = 200,
    page = 1,
    sort = {},
  }: {
    filter?: FilterCond<T>;
    select?: U[];
    pageSize?: number;
    page?: number;
    sort?: SortCond<T>;
  } = {}) {
    const filterOptions = this.model.where(filter as {});
    const returnData: ResultData<T, U>[] = [];
    const keys = Object.keys(sort as {});
    const descKeys = keys.filter(key => (sort as any)[key] === -1);
    const sortKeys = keys.filter(key => (sort as any)[key] === 1);

    return Promise.all([
      filterOptions.count(),
      filterOptions
        .select(select as any)
        .orderBy(sortKeys as any)
        .orderByDesc(descKeys as any)
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

    const targetRecord = await this.findOne(filter);

    if (!targetRecord) return 0;

    const { _id } = targetRecord;

    if (!_id) throw Error('_id is required');

    return this.model.update(_id, updateData);
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
   * 根据 _id 批量更新记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   */
  async updateMany(filter: FilterCond<T>, updateData: UpdateRecordMap<T>) {
    const recordList = await this.find(filter, ['_id']);

    return this.batchUpdate(
      recordList.map(item => ({
        ...updateData,
        _id: item._id,
      }))
    );
  }

  /**
   * 批量创建记录
   * @param recordMapList 多条用于创建的记录数据组成的数组
   * @paramExample [{_name: 'John', age: 19, gender: 'male'}, {_name: 'Alis', age: 16, gender: 'female'}]
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
}

/**
 * node constructor function
 * @param model object api name
 * @example
 * ```js
 * class UserService extends createModelServiceClass("_user") {}
 * ```
 */
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
const createModelService = <T extends ObjectApiNames>(model: T) =>
  new BaseModelService<T>({ model });

export {
  BaseModelService,
  object,
  createModelServiceClass,
  createModelService,
};
