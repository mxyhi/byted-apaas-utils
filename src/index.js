const { initContext, getContext } = require('./context');
const { initLogger, getLogger } = require('./logger');
const { initParams, getParams } = require('./params');

/**
 * @template {{params:Params,context:Context,logger:Logger}} T
 * @param {T} param0
 * @param {Params} param0.params
 * @param {Context} param0.context
 * @param {Logger} param0.logger
 * @returns {T}
 */
const initOptions = ({ params, context, logger }) => {
  initParams(params);
  initContext(context);
  initLogger(logger);
  return {
    params,
    context,
    logger,
  };
};

const getOptions = () => {
  return {
    params: getParams(),
    context: getContext(),
    logger: getLogger(),
  };
};

module.exports = {
  initOptions,
  getOptions,
  initParams,
  getParams,
  initContext,
  getContext,
  initLogger,
  getLogger,
};
