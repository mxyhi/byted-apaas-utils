// @ts-ignore
let logger: Logger = null;

// @ts-ignore
export const initLogger = (loggerInstance: Logger) => {
  logger = loggerInstance;
  return logger;
};

// @ts-ignore
export const getLogger = (): Logger => logger;
