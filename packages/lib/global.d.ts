export {};
type LoggerFn = (...args: any[]) => void;
import type { metadataMap } from '@byted-apaas/server-sdk-node/data';

declare global {
  type Context = {
    tenant: {
      type: 1 | 2 | 3 | 4;
    };
  };

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

  interface MetaDataMap extends metadataMap, Record<string, Record<"_id",number>> {
    store: {
      _id: number;
      log: string;
      info: string;
      warn: string;
      error: string;
      tags: {
        key: string;
        value: string;
      }[];

      hello:string
    };
  }
}
