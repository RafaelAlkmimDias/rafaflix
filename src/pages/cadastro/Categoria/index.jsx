import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { values, handlerChange, clearValues } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function refreshCategories() {
    categoriasRepository.getAll().then((data) => {
      setCategorias([
        ...data,
      ]);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    categoriasRepository.create(values).then(() => {
      refreshCategories();
    });

    clearValues();
  }

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handlerSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.titulo}
          name="titulo"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          handlerChange={handlerChange}
          required
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          loading ...
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{ color: Categoria.cor }}
            tip={Categoria.descricao}
          >
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>

    </PageDefault>
  );
}

export default Categoria;
