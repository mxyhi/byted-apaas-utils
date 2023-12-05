let logger = null;

/**
 * @param {Logger} loggerInstance
 */
const initLogger = loggerInstance => {
  logger = loggerInstance;
  return logger;
};

/**
 * @returns {Logger}
 */
const getLogger = () => logger;

module.exports = {
  initLogger,
  getLogger,
};
