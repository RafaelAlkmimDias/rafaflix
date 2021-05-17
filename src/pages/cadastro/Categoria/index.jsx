import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
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

  useEffect(() => {
    const URL_CATEGORIAS = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://rafaflixalura.herokuapp.com/categorias';

    fetch(URL_CATEGORIAS).then(
      async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      },
    );
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handlerSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
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
