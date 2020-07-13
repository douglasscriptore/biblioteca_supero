import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useField } from '@unform/core'

import { FiX } from 'react-icons/fi'

import { Container, Input, ErrorMessage } from './styles'

const InputField = ({ name, icon, errorField, ...rest }) => {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
      setValue(ref, valueRef) {
        ref.setInputValue('')
      },
      clearValue: (valueRef) => {
        valueRef.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <Container icon={icon ? 'true' : 'false'}>
      {!!icon && (
        <div>
          {icon}
          <span />
        </div>
      )}
      <Input
        icon={icon ? 'true' : 'false'}
        name={name}
        defaultValue={defaultValue}
        error={error ? 'true' : 'false' && errorField ? 'true' : 'false'}
        ref={ref}
        autoComplete="false"
        {...rest}
      />
      {(!!error || !!errorField) && (
        <i>
          <FiX />
        </i>
      )}

      <ErrorMessage>{error || errorField}</ErrorMessage>
    </Container>
  )
}

InputField.defaultProps = {
  errorField: null,
}

InputField.propTypes = {
  name: PropTypes.string,
  errorField: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default InputField
