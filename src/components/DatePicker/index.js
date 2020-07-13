import React, { useRef, useState, useEffect, forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker'
import { ptBR } from 'date-fns/locale'

import { useField } from '@unform/core'

import 'react-datepicker/dist/react-datepicker.css'

import { Container as ContainerDate } from './styles'
import { Input, Container, ErrorMessage } from '../Input/styles'
import { FiCalendar, FiX } from 'react-icons/fi'

const CustomInput = forwardRef(
  (
    {
      value,
      onClick,
      onChange,
      onFocus,
      icon,
      error,
      disabledC,
      placeholderText,
    },
    rest
  ) => (
    <Container icon={icon ? 'true' : 'false'}>
      {!!icon && (
        <div>
          {icon}
          <span />
        </div>
      )}
      <Input
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        placeholder={placeholderText}
        disabled={disabledC}
        icon={icon ? 'true' : 'false'}
        error={error ? 'true' : 'false' && rest.errorField ? 'true' : 'false'}
        {...rest}
      />
      {(!!error || !!rest.errorField) && (
        <i>
          <FiX />
        </i>
      )}

      <ErrorMessage>{error || rest.errorField}</ErrorMessage>
    </Container>
  )
)

const DatePicker = ({ name, placeholderText, disabled, ...rest }) => {
  const datepickerRef = useRef(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  const [date, setDate] = useState(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',

      clearValue: (ref) => {
        ref.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <ContainerDate>
      <ReactDatePicker
        showYearPicker
        dateFormat="yyyy"
        ref={datepickerRef}
        selected={date}
        locale={ptBR}
        onChange={setDate}
        customInput={
          <CustomInput
            disabledC={disabled}
            placeholderText={placeholderText}
            error={error}
            icon={<FiCalendar />}
          />
        }
        {...rest}
      />
    </ContainerDate>
  )
}

export default DatePicker
