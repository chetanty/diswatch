import { Amplify } from '@aws-amplify/core';
import { GraphQLAPI as API } from '@aws-amplify/api-graphql';
import awsExports from '../aws-exports';
import { listRegions } from '../graphql/queries';

Amplify.configure(awsExports);
