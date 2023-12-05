let params = null;

/**
 * @param {Record<string,unknown>} paramsInstance
 */
const initParams = paramsInstance => {
  params = paramsInstance;
  return params;
};

/**
 * @returns {Record<string,unknown>}
 */
const getParams = () => params;

module.exports = {
  initParams,
  getParams,
};
