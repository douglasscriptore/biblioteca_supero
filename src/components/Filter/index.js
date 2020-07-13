import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Form } from '@unform/web'

import DatePicker from '../../components/DatePicker'

import { Container } from './styles'

function Filter({ total, handleFilterSubmit }) {
  const formFilterRef = useRef(null)
  const [initialYear, setInitialYear] = useState(null)
  const [finishYear, setFinishYear] = useState(null)

  return (
    <Container>
      <Form ref={formFilterRef}>
        <p>Filtrar ano de publicação:</p>
        <DatePicker
          placeholderText="DE"
          name="AnoInicial"
          selected={initialYear}
          maxDate={new Date()}
          onChange={(date) => {
            setInitialYear(date)
            handleFilterSubmit(date, finishYear)
          }}
        />
        <DatePicker
          placeholderText="ATÉ"
          name="AnoFinal"
          selected={finishYear}
          minDate={initialYear}
          maxDate={new Date()}
          onChange={(date) => {
            setFinishYear(date)
            handleFilterSubmit(initialYear, date)
          }}
        />
      </Form>
      <span>{`${total} resultados encontrados`}</span>
    </Container>
  )
}

Filter.defaultProps = {
  total: 0,
}

Filter.propTypes = {
  total: PropTypes.number,
  handleFilterSubmit: PropTypes.func.isRequired,
}

export default Filter
