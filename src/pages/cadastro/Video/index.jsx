import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const categoriaInicial = [
    {
      id: '',
      titulo: 'carregando',
    },
  ];
  const { values, handlerChange } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState(categoriaInicial);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriasRepository.getAll().then((data) => {
      setCategorias(data);
    });
  }, []);

  function handlerSubmit(event) {
    event.preventDefault();

    const categoriaSelecionada = categorias.find(
      (categoria) => categoria.titulo === values.categoria,
    );

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaSelecionada.id,
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <PageDefault>
      <h1>cadastro de vídeo</h1>

      <form onSubmit={handlerSubmit}>
        <FormField
          label="Titulo do vídeo"
          type="text"
          value={values.titulo}
          name="titulo"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Url do vídeo"
          type="text"
          value={values.url}
          name="url"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Categoria do vídeo"
          type="text"
          value={values.categoria}
          name="categoria"
          handlerChange={handlerChange}
          suggestions={titulosCategorias}
          required
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
