import * as _byted_apaas_server_sdk_node_common_structs from '@byted-apaas/server-sdk-node/common/structs';
import {
  _IKAllEndpoint,
  _IKQuery,
} from '@byted-apaas/server-sdk-node/context/db/impl/IObject';
import {
  ObjectApiNames,
  SelectCond,
  FilterCond,
  ResultData,
  UpdateRecordCond,
  UpdateRecordMap,
  CreateRecordMap,
  metadataMap,
} from './type.js';
import '@byted-apaas/server-sdk-node/context/db/db';
import '@byted-apaas/server-sdk-node/types/types';

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
declare const object: <T extends keyof metadataMap>(
  model: T
) => _IKAllEndpoint<metadataMap[T]> & _IKQuery<metadataMap[T]>;
declare class BaseModelService<T extends ObjectApiNames> {
  /**
   * 模型对象
   */
  readonly model: _IKAllEndpoint<metadataMap[T]> & _IKQuery<metadataMap[T]>;
  constructor({ model }: { model: T });
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
   * 根据 _id 批量更新记录
   * @param recordMapList 多条用于更新的记录数据组成的数组，记录数据需对 _id 赋值
   * @paramExample [{_id: 1001, _name: 'John', gender: 'male'}, {_id: 1002, _name: 'Alis', gender: 'female'}]
   */
  batchUpdate(
    recordMapList: UpdateRecordCond<T>[]
  ): Promise<_byted_apaas_server_sdk_node_common_structs.BatchResult[]>;
  /**
   * 根据 _id 批量更新记录
   * @param filter 筛选条件
   * @param updateData 用于更新的新数据
   */
  updateMany(
    filter: FilterCond<T>,
    updateData: UpdateRecordMap<T>
  ): Promise<_byted_apaas_server_sdk_node_common_structs.BatchResult[]>;
  /**
   * 批量创建记录
   * @param recordMapList 多条用于创建的记录数据组成的数组
   * @paramExample [{_name: 'John', age: 19, gender: 'male'}, {_name: 'Alis', age: 16, gender: 'female'}]
   */
  batchCreate(recordMapList: CreateRecordMap<T>[]): Promise<number[][]>;
}
/**
 * node constructor function
 * @param model object api name
 * @example
 * ```js
 * class UserService extends createModelServiceClass("_user") {}
 * ```
 */
declare const createModelServiceClass: <T extends keyof metadataMap>(
  model: T
) => {
  new (): BaseModelService<T>;
};
/**
 * 获取对象模型实例
 * @param model object api name
 * @returns model
 */
declare const createModelService: <T extends keyof metadataMap>(
  model: T
) => BaseModelService<T>;

export {
  BaseModelService,
  createModelService,
  createModelServiceClass,
  object,
};
