import { createHook } from '../utils/hooks';

export type UseParams = (v?: Params) => Readonly<Params>;

/**
 * 自定义参数
 */
const createParamsHook: () => UseParams = () =>
  createHook(loggerInstance => {
    let params = loggerInstance;

    return params;
  });

export { createParamsHook };
