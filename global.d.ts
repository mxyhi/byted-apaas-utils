export {};
type LoggerFn = (...args: any[]) => void;

declare global {
  type Context = {};

  type Logger = {
    log: LoggerFn;
    info: LoggerFn;
    warn: LoggerFn;
    error: LoggerFn;
    tags: {
      key: string;
      value: string;
    }[];
  };
  type Params = {};
}
