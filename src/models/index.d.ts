import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-expect-error

import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerRegion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Region, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly disasters?: (Disaster | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Region, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly disasters: AsyncCollection<Disaster>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Region = LazyLoading extends LazyLoadingDisabled ? EagerRegion : LazyRegion

export declare const Region: (new (init: ModelInit<Region>) => Region) & {
  copyOf(source: Region, mutator: (draft: MutableModel<Region>) => MutableModel<Region> | void): Region;
}

type EagerDisaster = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Disaster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly regionID: string;
  readonly type: string;
  readonly checklistItems: (string | null)[];
  readonly emergencyResources: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDisaster = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Disaster, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly regionID: string;
  readonly type: string;
  readonly checklistItems: (string | null)[];
  readonly emergencyResources: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Disaster = LazyLoading extends LazyLoadingDisabled ? EagerDisaster : LazyDisaster

export declare const Disaster: (new (init: ModelInit<Disaster>) => Disaster) & {
  copyOf(source: Disaster, mutator: (draft: MutableModel<Disaster>) => MutableModel<Disaster> | void): Disaster;
}