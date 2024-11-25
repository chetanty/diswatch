/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
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
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
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
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
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
export const createDisaster = /* GraphQL */ `
  mutation CreateDisaster(
    $input: CreateDisasterInput!
    $condition: ModelDisasterConditionInput
  ) {
    createDisaster(input: $input, condition: $condition) {
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
export const updateDisaster = /* GraphQL */ `
  mutation UpdateDisaster(
    $input: UpdateDisasterInput!
    $condition: ModelDisasterConditionInput
  ) {
    updateDisaster(input: $input, condition: $condition) {
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
export const deleteDisaster = /* GraphQL */ `
  mutation DeleteDisaster(
    $input: DeleteDisasterInput!
    $condition: ModelDisasterConditionInput
  ) {
    deleteDisaster(input: $input, condition: $condition) {
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
