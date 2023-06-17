import axios from 'axios';

/**
 * The internal dependencies.
 */

const client = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
});

client.interceptors.request.use(config => {
  try {
    // TODO handle auth token
    // const token = getToken();
    // config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';

    return config;
  } catch (e) {
    return config;
  }
});

client.interceptors.response.use(
  function (successRes) {
    return successRes;
  },
  function (error) {
    console.error('error', error);

    return Promise.reject(error);
  },
);

const getArtworksApi = (page = 1, limit = 15) => {
  return client
    .get('/artworks', { params: { page, limit } })
    .then(response => response.data)
    .catch(e => console.log('error at getArtworksApi', e));
};

const getArtworkDetailsApi = (artworkID: string, page = 1, limit = 15) => {
  return client
    .get(`/artworks/${artworkID}`, { params: { page, limit } })
    .then(response => response.data)
    .catch(e => console.log('error at getArtworkDetailsApi', e));
};

const getArtworksBySearchApi = (search: string, page = 1, limit = 15) => {
  return client
    .get('/artworks/search', { params: { page, limit, q: search } })
    .then(response => response.data)
    .catch(e => console.log('error at getArtworksBySearchApi', e));
};

export { getArtworksApi, getArtworkDetailsApi, getArtworksBySearchApi };
