import type { _WhereCond } from '@byted-apaas/server-sdk-node/types/types';
import type { _Cond } from '@byted-apaas/server-sdk-node/types/types';

export type RequiredPick<T, K extends keyof T> = {
  [P in K]-?: T[P];
};

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P];
};

export type RequiredKey<T, K extends keyof T> = T & RequiredPick<T, K>;

export type PartialKey<T, K extends keyof T> = PartialPick<T, K> & Omit<T, K>;

export type MetaDataNames = keyof MetaDataMap;

export type FilterCond<T extends MetaDataNames> = _WhereCond<MetaDataMap[T]>;

export type SelectCond<T extends MetaDataNames> = keyof MetaDataMap[T];

export type SortCond<T extends MetaDataNames> = Partial<
  Record<keyof MetaDataMap[T], 1 | -1>
>;

export type ResultData<
  T extends MetaDataNames,
  K extends keyof MetaDataMap[T]
> = Pick<MetaDataMap[T], K>;

export type UpdateRecordMap<T extends MetaDataNames> = _Cond<MetaDataMap[T]>;

export type UpdateRecordCond<T extends MetaDataNames> = UpdateRecordMap<T> & {
  _id: number;
};

export type CreateRecordMap<T extends MetaDataNames> = PartialKey<
  MetaDataMap[T], '_id'
>;
