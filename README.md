# 飞书应用引擎工具函数

## example

```js

const { getOptions } = require('byted-apaas-utils');
const { initOptions } = require('byted-apaas-utils');
const { getLogger } = require('byted-apaas-utils');
const { getParams } = require('byted-apaas-utils');

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
module.exports = async function (params, context, logger) {
  // 日志功能
  logger.info(`${new Date()} 函数开始执行`);

  // 在这里补充业务代码
  initOptions({
    params,
    context,
    logger,
  });
  const options = getOptions();
  logger.info(options);
  getLogger().info('logger');
  logger.info(getParams());
};


```