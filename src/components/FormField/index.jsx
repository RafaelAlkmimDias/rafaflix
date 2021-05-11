import React from 'react';
import PropTypes from 'prop-types';
import { FormBlock, FormLabel } from './styles';

function FormField({
  label, value, name, handlerChange, required, type,
}) {
  FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handlerChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string.isRequired,
  };
  FormField.defaultProps = {
    required: false,
    handlerChange: () => {},
  };

  if (type === 'textarea') {
    return (
      <FormBlock>
        <FormLabel>
          { label }
        </FormLabel>
        <textarea
          name={name}
          onChange={handlerChange}
          required={required}
          value={value}
        />
      </FormBlock>
    );
  }

  return (
    <FormBlock>
      <FormLabel>
        { label }
      </FormLabel>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handlerChange}
        required={required}
      />
    </FormBlock>
  );
}

export default FormField;
