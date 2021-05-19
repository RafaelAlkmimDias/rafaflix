import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}categorias`;

function getAll() {
  return fetch(URL_CATEGORIAS).then(
    async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }

      throw new Error('Ocorreu um erro');
    },
  );
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(
    async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }

      throw new Error('ocorreu um erro');
    },
  );
}

export default {
  getAllWithVideos,
  getAll,
};
