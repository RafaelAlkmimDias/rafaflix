import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handlerChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValue(chave, valor);
  }

  function clearValues() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handlerChange,
    clearValues,
  };
}

export default useForm;
