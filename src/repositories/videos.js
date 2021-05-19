import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}videos`;

function create(objetoDoVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(
    async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }

      throw new Error('Ocorreu um erro');
    },
  );
}

export default {
  create,
};
