const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?';

const getURL = params =>
  ROOT_URL +
  Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

export default getURL;
