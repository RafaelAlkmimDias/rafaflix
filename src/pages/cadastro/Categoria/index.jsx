import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  }
  function handlerChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValue(chave, valor);
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handlerSubmit}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          value={values.nome}
          name="nome"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Descrição: "
          type="textarea"
          value={values.descricao}
          name="descricao"
          handlerChange={handlerChange}
          required
        />
        <FormField
          label="Nome da Categoria: "
          type="color"
          value={values.cor}
          name="cor"
          handlerChange={handlerChange}
          required
        />
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{ color: Categoria.cor }}
            tip={Categoria.descricao}
          >
            {categoria.nome}
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
