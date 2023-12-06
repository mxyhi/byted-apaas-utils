const init = ({
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
  // @ts-ignore
  globalThis.params = params;
  // @ts-ignore
  globalThis.context = context;
  // @ts-ignore
  globalThis.logger = logger;
};

init.init = init;
module.exports = init;

export { init, init as default };


