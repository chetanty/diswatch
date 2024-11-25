// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Region, Disaster } = initSchema(schema);

export {
  Region,
  Disaster
};