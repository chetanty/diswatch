/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
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
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRegions = /* GraphQL */ `
  query SyncRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDisaster = /* GraphQL */ `
  query GetDisaster($id: ID!) {
    getDisaster(id: $id) {
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
export const listDisasters = /* GraphQL */ `
  query ListDisasters(
    $filter: ModelDisasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDisasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDisasters = /* GraphQL */ `
  query SyncDisasters(
    $filter: ModelDisasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDisasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const disastersByRegion = /* GraphQL */ `
  query DisastersByRegion(
    $regionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDisasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    disastersByRegion(
      regionID: $regionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
