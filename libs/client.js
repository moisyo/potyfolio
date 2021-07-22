import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'aranjuez1',
  apiKey: process.env.API_KEY,
});
