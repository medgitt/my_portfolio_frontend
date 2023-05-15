
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-04-26',
  token: process.env.REACT_APP_SANITY_TOKEN,
  cors: {
    origins: ['https://medgitt.github.io'], // allow this domain to access your API
    headers: ['Authorization', 'Content-Type'], // allow these headers in requests
  },
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);