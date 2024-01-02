import { FN_SERVICE_SYMBOL } from '../enums';

abstract class FnService {
  private readonly [FN_SERVICE_SYMBOL] = FN_SERVICE_SYMBOL;
  private readonly _params: Params = {};
  private readonly _context: Context = {};
  private readonly _logger = {} as Logger;
  private readonly _apiName?: string;

  /**
   * 自定义参数
   */
  protected get params() {
    return this._params;
  }

  /**
   * 上下文参数，可通过此参数下钻获取上下文变量信息等
   */
  protected get context() {
    return this._context;
  }

  /**
   * 日志记录器
   */
  protected get logger() {
    return this._logger;
  }

  /**
   * 函数api名称
   */
  protected get apiName() {
    return this._apiName;
  }

  /**
   * 信息级别日志
   * @param args 日志内容
   */
  protected log(...args: any[]) {
    this.logger.log(...args);
  }

  /**
   * 信息级别日志
   * @param args 日志内容
   */
  protected info(...args: any[]) {
    this.logger.info(...args);
  }

  /**
   * 警告级别日志
   * @param args 日志内容
   */
  protected warn(...args: any[]) {
    this.logger.warn(...args);
  }

  /**
   * 错误级别日志
   * @param args 日志内容
   */
  protected error(...args: any[]) {
    this.logger.error(...args);
  }

  /**
   * 运行函数
   */
  abstract run(): unknown;
}

export { FnService };
