/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onCreateRegion(filter: $filter) {
      id
      name
      latitude
      longitude
      disasters {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onUpdateRegion(filter: $filter) {
      id
      name
      latitude
      longitude
      disasters {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion($filter: ModelSubscriptionRegionFilterInput) {
    onDeleteRegion(filter: $filter) {
      id
      name
      latitude
      longitude
      disasters {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateDisaster = /* GraphQL */ `
  subscription OnCreateDisaster($filter: ModelSubscriptionDisasterFilterInput) {
    onCreateDisaster(filter: $filter) {
      id
      regionID
      type
      checklistItems
      emergencyResources
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateDisaster = /* GraphQL */ `
  subscription OnUpdateDisaster($filter: ModelSubscriptionDisasterFilterInput) {
    onUpdateDisaster(filter: $filter) {
      id
      regionID
      type
      checklistItems
      emergencyResources
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteDisaster = /* GraphQL */ `
  subscription OnDeleteDisaster($filter: ModelSubscriptionDisasterFilterInput) {
    onDeleteDisaster(filter: $filter) {
      id
      regionID
      type
      checklistItems
      emergencyResources
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
