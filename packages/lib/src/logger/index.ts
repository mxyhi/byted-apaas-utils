import {
  getInvokeFuncName,
  getLogID,
} from '@byted-apaas/server-common-node/utils/utils';

export type Event = {
  id: string;
  apiName: string;
  type: 'log' | 'info' | 'warn' | 'error';
  payload: any[];
};

export type Plugin = (event: Event) => void | Promise<void> | any;

const emitter = (type: Event['type'], args: any[]) => (event: Plugin) => {
  event({ id: getLogID(), apiName: getInvokeFuncName(), type, payload: args });
};

export class ALogger {
  private static container = new Map();
  private static events: Plugin[] = [];

  static addEffect(...effects: Plugin[]) {
    return this.events.push(...effects) - 1;
  }

  static removeEffect(id: number) {
    return this.events.splice(id, 1);
  }

  private static get logger(): Logger {
    return this.container.get(getInvokeFuncName() + '_' + getLogID());
  }

  static inject(logger: Logger) {
    return this.container.set(getInvokeFuncName() + '_' + getLogID(), logger);
  }

  static log(...args: any[]) {
    this.logger.log(...args);
    queueMicrotask(() => {
      this.events.forEach(emitter('log', args));
    });
  }

  static info(...args: any[]) {
    this.logger.info(...args);
    queueMicrotask(() => {
      this.events.forEach(emitter('info', args));
    });
  }

  static warn(...args: any[]) {
    this.logger.warn(...args);
    queueMicrotask(() => {
      this.events.forEach(emitter('warn', args));
    });
  }

  static error(...args: any[]) {
    this.logger.error(...args);
    queueMicrotask(() => {
      this.events.forEach(emitter('error', args));
    });
  }
}
