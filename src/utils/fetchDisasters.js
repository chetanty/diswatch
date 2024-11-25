import { GraphQLAPI } from '@aws-amplify/api-graphql';
import { listRegions } from '../graphql/queries';
import { Amplify } from '@aws-amplify/core';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export const fetchDisasterData = async () => {
  try {
    console.log('Preparing to fetch disaster data...');
    console.log('Query:', listRegions);

    const variables = { limit: 100 };
    console.log('Variables:', variables);

    const response = await GraphQLAPI.graphql({
      query: listRegions,
      variables,
    });

    console.log('Response:', response);

    const regions = response.data.listRegions.items || [];
    return regions.map((region) => ({
      id: region.id,
      name: region.name,
      latitude: region.latitude,
      longitude: region.longitude,
      disasters: region.disasters?.items || [],
    }));
  } catch (error) {
    console.error('Error in fetchDisasterData:', error);
    return [];
  }
};
