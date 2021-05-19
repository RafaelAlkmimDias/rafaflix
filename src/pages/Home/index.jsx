import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((data) => {
      setDados([
        ...data,
      ]);
    }).then(() => {
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }, []);

  return (
    <PageDefault>

      {dados.length === 0 && (<div>loading...</div>)}

      { dados.length !== 0 && dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="O que é Front-end?"
              />
              <Carousel
                key={categoria.id}
                ignoreFirstVideo
                category={categoria}
              />
            </>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            ignoreFirstVideo
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
