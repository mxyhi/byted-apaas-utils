import { IDB } from '@byted-apaas/server-sdk-node/context/db/db';
import type { _WhereCond } from '@byted-apaas/server-sdk-node/types/types';
import type { _Cond } from '@byted-apaas/server-sdk-node/types/types';

export type AppDataType = (typeof application)['data'];

export type metadataMap = AppDataType extends IDB<{}, infer U> ? U : never;

export type ObjectApiNames = Parameters<AppDataType['object']>[0];

export type RequiredPick<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P];
};

export type RequiredKey<T, K extends keyof T> = T & RequiredPick<T, K>;

export type PartialKey<T, K extends keyof T> = PartialPick<T, K> & Omit<T, K>;

export type FilterCond<T extends ObjectApiNames> = _WhereCond<metadataMap[T]>;

export type SelectCond<T extends ObjectApiNames> = keyof metadataMap[T];

export type SortCond<T extends ObjectApiNames> = Partial<
  Record<keyof metadataMap[T], 1 | -1>
>;

export type ResultData<
  T extends ObjectApiNames,
  K extends keyof metadataMap[T]
> = Pick<metadataMap[T], K>;

export type UpdateRecordMap<T extends ObjectApiNames> = _Cond<metadataMap[T]>;

export type UpdateRecordCond<T extends ObjectApiNames> = UpdateRecordMap<T> & {
  _id: number;
};

export type CreateRecordMap<T extends ObjectApiNames> = PartialKey<
  metadataMap[T],
  // @ts-ignore
  '_id'
>;
