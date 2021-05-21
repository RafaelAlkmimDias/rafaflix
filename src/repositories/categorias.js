import config from '../config';
import connections from './connections';

const URL_CATEGORIAS = `${config.URL_BACKEND}categorias`;

function getAll() {
  return connections.get(URL_CATEGORIAS);
}

function getAllWithVideos() {
  return connections.get(`${URL_CATEGORIAS}?_embed=videos`);
}

function create(objetoDaCategoria) {
  return connections.post(URL_CATEGORIAS, objetoDaCategoria);
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
