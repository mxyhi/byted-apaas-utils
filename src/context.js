let context = null;

/**
 * @param {Context} contextInstance
 */
const initContext = contextInstance => {
  context = contextInstance;
  return context;
};

/**
 * @returns {Context}
 */
const getContext = () => context;

module.exports = {
  initContext,
  getContext,
};
