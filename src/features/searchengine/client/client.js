import algoliasearch from 'algoliasearch/lite';

const appId = import.meta.env.VITE_ALGOLIA_APP_ID
const apiKey = import.meta.env.VITE_ALGOLIA_API_KEY
const client = algoliasearch(appId,apiKey)
export default client;

