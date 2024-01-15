import {
  _IKAllEndpoint,
  _IKQuery,
} from '@byted-apaas/server-sdk-node/context/db/impl/IObject';
import { _Cond } from '@byted-apaas/server-sdk-node/types/types';
import {
  ObjectApiNames,
  SelectCond,
  FilterCond,
  ResultData,
  UpdateRecordCond,
  UpdateRecordMap,
  metadataMap,
  CreateRecordMap,
} from './type.js';
import { BatchResult } from '@byted-apaas/server-sdk-node/common/structs';
import '@byted-apaas/server-sdk-node/context/db/db';

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
declare const object: <T extends ObjectApiNames>(
  model: T
) => _IKAllEndpoint<metadataMap[T]> & _IKQuery<metadataMap[T]>;
declare class BaseModelService<T extends ObjectApiNames> {
  /**
   * 模型对象
   */
  readonly model: _IKAllEndpoint<metadataMap[T]> & _IKQuery<metadataMap[T]>;
  /**
   * 模型名称
   */
  readonly modelName: T;
  constructor({ model }: { model: T });
  /**
   * 用户级鉴权
   */
  useUserAuth(): BaseModelService<T>;
  /**
   * 系统级鉴权
   */
  useSystemAuth(): BaseModelService<T>;
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
  object(model: T): _IKAllEndpoint<metadataMap[T]> & _IKQuery<metadataMap[T]>;
  /**
   * 查找所有符合条件的记录
   * @param filter 筛选条件
   * @param select 需返回的字段
   * @param sort 排序字段
   * @param desc 是否降序 默认`false`：升序;`true`：降序
   * @returns 返回所有符合条件的记录
   */
  find<U extends SelectCond<T>>(
    filter?: FilterCond<T>,
    select?: U[],
    sort?: U[],
    desc?: boolean
  ): Promise<ResultData<T, U>[]>;
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
    filter,
    select,
    sort,
    desc,
    handler,
  }: {
    filter?: FilterCond<T>;
    select?: U[];
    sort?: U[];
    desc?: boolean;
    handler: (records: ResultData<T, U>[]) => Promise<void> | void;
  }): Promise<void>;
  /**
   * 查找一个符合条件的记录
   * @param filter 筛选条件
   * @param select 需返回的字段
   * @returns 返回一个符合条件的记录
   */
  findOne<U extends SelectCond<T>>(
    filter?: FilterCond<T>,
    select?: U[]
  ): Promise<ResultData<T, U>>;
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
  findLimit<U extends SelectCond<T>>({
    filter,
    select,
    pageSize,
    page,
    sort,
    desc,
  }?: {
    filter?: FilterCond<T>;
    select?: U[];
    pageSize?: number;
    page?: number;
    sort?: U[];
    desc?: boolean;
  }): Promise<{
    /**
     * 符合条件的总数
     */
    total: number;
    /**
     * 当前页的记录
     */
    list: ResultData<T, U>[];
  }>;
  /**
   * 计算符合条件的记录数
   * @param filter 筛选条件
   * @returns 返回符合条件的记录数
   */
  count(filter?: FilterCond<T>): Promise<number>;
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
  updateOneById(recordMap: UpdateRecordCond<T>): Promise<void>;
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
  updateOneById(_id: number, recordMap: UpdateRecordMap<T>): Promise<void>;
  /**
   * 更新符合条件的一条记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   * @returns 0：未找到符合条件的记录
   */
  updateOne(
    filter: FilterCond<T>,
    updateData: UpdateRecordMap<T>
  ): Promise<void | 0>;
  /**
   * 根据筛选条件批量更新记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   */
  updateMany(
    filter: FilterCond<T>,
    updateData: UpdateRecordMap<T>
  ): Promise<BatchResult[]>;
  /**
   * 根据 _id 批量更新记录
   * @param recordMapList 多条用于更新的记录数据组成的数组，记录数据需对 _id 赋值
   * @paramExample [{_id: 1001, _name: 'John', gender: 'male'}, {_id: 1002, _name: 'Alis', gender: 'female'}]
   */
  batchUpdate(recordMapList: UpdateRecordCond<T>[]): Promise<BatchResult[]>;
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
  create(recordMap: _Cond<metadataMap[T]>): Promise<{
    _id: number;
  }>;
  /**
   * 批量创建记录
   * @param recordMapList 多条用于创建的记录数据组成的数组
   * @paramExample `[{_name: 'John', age: 19, gender: 'male'}, {_name: 'Alis', age: 16, gender: 'female'}]`
   */
  batchCreate(recordMapList: CreateRecordMap<T>[]): Promise<number[][]>;
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
  /**
   * 删除符合条件的一条记录
   * @param filter 筛选条件
   * @returns 0：未找到符合条件的记录
   */
  deleteOne(filter: FilterCond<T>): Promise<void | 0>;
  /**
   * 根据 _id 批量更新记录
   * @param recordMapList 多条用于更新的记录数据组成的数组，记录数据需对 _id 赋值
   * @paramExample [{_id: 1001, _name: 'John', gender: 'male'}, {_id: 1002, _name: 'Alis', gender: 'female'}]
   */
  batchDelete(
    recordMapList: UpdateRecordCond<T>[] | number[]
  ): Promise<BatchResult[]>;
  /**
   * 删除符合条件的所有记录
   * @param filter 筛选条件
   */
  deleteMany(filter: FilterCond<T>): Promise<BatchResult[]>;
}
/**
 * node constructor function
 * @param model object api name
 * @example
 * ```js
 * class UserService extends createModelServiceClass("_user") {}
 * ```
 */
declare const createModelServiceClass: <T extends ObjectApiNames>(
  model: T
) => {
  new (): BaseModelService<T>;
};
/**
 * 获取对象模型实例
 * @param model object api name
 * @returns model
 */
declare const createModelService: <T extends ObjectApiNames>(
  model: T
) => BaseModelService<T>;

export {
  BaseModelService,
  createModelService,
  createModelServiceClass,
  object,
};
