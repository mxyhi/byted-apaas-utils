import { createHook } from '../utils/hooks';

export type UseContext = (v?: Context) => Readonly<Context>;

/**
 * 上下文参数，可通过此参数下钻获取上下文变量信息等
 */
const createContextHook: () => UseContext = () =>
  createHook(loggerInstance => {
    let context = loggerInstance;

    return context;
  });

export { createContextHook };
