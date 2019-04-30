import Prismic from 'prismic-javascript';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const getPrismicClient = () => Prismic.api(publicRuntimeConfig.prismicEndpoint);
