import config from '../config';
import connections from './connections';

const URL_VIDEOS = `${config.URL_BACKEND}videos`;

function create(objetoDoVideo) {
  return connections.post(URL_VIDEOS, objetoDoVideo);
}

export default {
  create,
};
