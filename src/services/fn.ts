import { FN_SERVICE_SYMBOL } from '../enums';
import { TenantType } from '@byted-apaas/server-common-node/context/tenant';

abstract class FnService {
  private readonly [FN_SERVICE_SYMBOL] = FN_SERVICE_SYMBOL;
  private readonly _params: Params = {};
  private readonly _context: Context = {} as Context;
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
   * 用于判断代码执行环境，支持如下枚举值：
   * type = 1：生产环境；type = 3：开发环境；type = 4：沙箱环境
   */
  protected get envType() {
    return this.context.tenant.type;
  }

  /**
   * 判断是否测试环境
   */
  protected get isDev() {
    return (
      this.envType === TenantType.DEVORG || this.envType === TenantType.SANDBOX
    );
  }

  /**
   * 判断是否正式环境
   */
  protected get isProd() {
    return (
      this.envType === TenantType.NORMAL || this.envType === TenantType.FEISHU
    );
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
