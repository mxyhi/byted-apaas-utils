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
  private static container = new Map<string, Logger>();
  private static events: Plugin[] = [];

  static addEffect(...effects: Plugin[]) {
    return this.events.push(...effects) - 1;
  }

  static gc() {
    const key = getInvokeFuncName() + '_' + getLogID();
    return this.container.delete(key);
  }

  static removeEffect(id: number) {
    return this.events.splice(id, 1);
  }

  static get logger(): Logger {
    return this.container.get(getInvokeFuncName() + '_' + getLogID())!;
  }

  static inject(logger: Logger) {
    return this.container.set(getInvokeFuncName() + '_' + getLogID(), logger);
  }

  static log(...args: any[]) {
    queueMicrotask(() => {
      this.events.forEach(emitter('log', args));
    });
    return this.logger.log(...args);
  }

  static info(...args: any[]) {
    queueMicrotask(() => {
      this.events.forEach(emitter('info', args));
    });
    return this.logger.info(...args);
  }

  static warn(...args: any[]) {
    queueMicrotask(() => {
      this.events.forEach(emitter('warn', args));
    });
    return this.logger.warn(...args);
  }

  static error(...args: any[]) {
    queueMicrotask(() => {
      this.events.forEach(emitter('error', args));
    });
    return this.logger.error(...args);
  }
}
