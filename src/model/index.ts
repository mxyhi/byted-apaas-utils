const { db } = require('@byted-apaas/server-sdk-node');
import { db } from '@byted-apaas/server-sdk-node'

class BaseService {
  constructor({ model }) {
    this.model = db.object(model);
  }

  async leanAll(filter = {}, select = [], sort = [], desc = false) {
    const total = await this.model.count(filter);
    const returnData = [];
    for (let i = 0; i < total; ) {
      let limit = 200;
      if (i + 200 > total) limit = total - i;
      const options = this.model
        .where(filter)
        .select(select)
        .limit(limit)
        .offset(i);
      const sortOptions = desc
        ? options.orderByDesc(...sort)
        : options.orderBy(...sort);
      const data = await sortOptions.find();
      returnData.push(...data);
      i += 200;
    }
    return returnData;
  }

  find(filter = {}, select = [], sort = ['_createdAt'], desc = false) {
    return this.leanAll(filter, select, sort, desc);
  }

  /**
   * 分页查询
   * @param {object} param0
   * @param {{}} param0.filter 查询条件
   * @param {string[]} param0.select 查询字段
   * @param {number} param0.pageSize 每页数量
   * @param {number} param0.page 页码
   * @param {string[]} param0.sort 排序字段,默认`['_createdAt']`
   * @param {boolean} param0.desc 是否倒序,默认正序,`false`为正序,`true`为倒序
   * @returns {Promise<{total:number,list:any[]}>}
   */
  async findLimit({
    filter = {},
    select = [],
    pageSize = 200,
    page = 1,
    sort = ['_createdAt'],
    desc = false,
  } = {}) {
    const returnData = [];
    const total = await this.model.where(filter).count();
    if (pageSize > 200) {
      const maxTotal = total > pageSize ? pageSize : total;
      let i = (page - 1) * pageSize;
      while (i < maxTotal) {
        let maxLimit = 200;
        if (i + 200 > maxTotal) maxLimit = maxTotal - i;
        const options = this.model
          .where(filter)
          .select(select)
          .limit(maxLimit)
          .offset(i);
        const sortOptions = desc
          ? options.orderByDesc(...sort)
          : options.orderBy(...sort);
        const data = await sortOptions.find();
        returnData.push(...data);
        i += 200;
      }

      return { total, list: returnData };
    }

    const options = this.model
      .where(filter)
      .select(select)
      .limit(pageSize)
      .offset((page - 1) * pageSize);
    const sortOptions = desc
      ? options.orderByDesc(...sort)
      : options.orderBy(...sort);

    const data = await sortOptions.find();

    return { total, list: data };
  }

  findOne(filter, select = []) {
    return this.model.where(filter).select(select).findOne();
  }

  count(filter = {}) {
    return this.model.where(filter).count();
  }

  async updateOne(id, set) {
    return this.model.update(id, set);
  }

  async updateMany(filter, set) {
    const ids = await this.find(filter, ['_id']);
    return this.batchUpdate(
      ids.map(item => ({
        ...set,
        _id: item._id,
      }))
    );
  }

  /**
   * 批量更新
   * @param {({_id:number} & Record<string,any>)[]} list
   */
  async batchUpdate(list) {
    let updateList = [];
    const result = [];

    for (let i = 0; i < list.length; ) {
      updateList = list.slice(i, i + 500);
      const res = await this.model.batchUpdate(updateList);
      result.push(res);
      i += 500;
    }
    return result;
  }

  /**
   * 批量新增
   * @param {Record<string,any>[]} list
   */
  async batchCreate(list) {
    let updateList = [];
    const result = [];
    for (let i = 0; i < list.length; ) {
      updateList = list.slice(i, i + 500);
      const res = await this.model.batchCreate(updateList);
      result.push(res);
      i += 500;
    }
    return result;
  }

  create(data) {
    return this.model.create(data);
  }
}

module.exports = BaseService;
