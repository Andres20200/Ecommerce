import sanityClient from '@sanity/client';
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'znbui7dg',
  dataset: 'production',
  apiVersion: '2023-09-28',
  useCdn: true,
  token: 'skVGVP0hIyN8iaAy6qgstPU1H4vn8B0PG0nyGJMaSuXyB9kTXkAkBGl8CQDxSxl0PaeqViX08nzAFCjD7HcuVaWQD8tb1YQZuHRbjmBPYUMarFP2BTUPfa01tZbyKhooUv2K5YnhiRIyNfpLl34EQsSeO0G4WHJC2UNjswHzATSUL16xAy9l'
});

//export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
