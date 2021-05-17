import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, value, name, handlerChange, required, type,
}) {
  FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handlerChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
  };
  FormField.defaultProps = {
    required: false,
    handlerChange: () => {},
    type: 'input',
  };

  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          name={name}
          onChange={handlerChange}
          required={required}
          value={value}
          hasValue={hasValue}
        />
        <Label.Text>
          { label }
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

export default FormField;
