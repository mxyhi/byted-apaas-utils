import { createHook } from '../utils/hooks';

export type UseLogger = (v?: Logger) => Readonly<Logger>;

/**
 * 日志记录器
 */
const createLoggerHook: () => UseLogger = () =>
  createHook(loggerInstance => {
    let logger = loggerInstance;

    return logger;
  });

export { createLoggerHook };
