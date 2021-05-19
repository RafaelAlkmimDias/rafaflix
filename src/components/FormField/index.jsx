import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, value, name, handlerChange, required, type, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          onChange={handlerChange}
          required={required}
          value={value}
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          { label }
          :
        </Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
            suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option_${suggestion}`}>
                {suggestion}
              </option>
            ))
          }
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handlerChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

FormField.defaultProps = {
  required: false,
  handlerChange: () => {},
  type: 'input',
  suggestions: [],
};

export default FormField;
