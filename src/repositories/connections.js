function get(url) {
  return fetch(url).then(
    async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      throw new Error('Ocorreu um erro');
    },
  );
}

function post(url, object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
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
  get,
  post,
};
