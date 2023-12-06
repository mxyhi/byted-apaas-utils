declare global {
  /**
   * 自定义参数
   */
  const params: Params;

  /**
   * 上下文参数，可通过此参数下钻获取上下文变量信息等
   */
  const context: Context;

  /**
   * 日志记录器
   */
  const logger: Logger;
}

declare const init: {
  ({
    params,
    context,
    logger,
  }: {
    params: Params;
    context: Context;
    logger: Logger;
  }): void;
  init: ({
    params,
    context,
    logger,
  }: {
    params: Params;
    context: Context;
    logger: Logger;
  }) => void;
};
export { init, init as default };
