import { getContext, initContext } from './context';
import { getLogger, initLogger } from './logger';
import { getParams, initParams } from './params';

const initOptions = ({
  params,
  context,
  logger,
}: {
  // @ts-ignore
  params: Params;
  // @ts-ignore
  context: Context;
  // @ts-ignore
  logger: Logger;
}) => {
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

export {
  initOptions,
  getOptions,
  initParams,
  getParams,
  initContext,
  getContext,
  initLogger,
  getLogger,
};
