import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { switchTheme } from '../../store/modules/theme/actions'

import Input from '../Input'
import Button from '../Button'
import Tooltip from '../Tooltip'

import { FiSearch } from 'react-icons/fi'
import { RiContrastLine } from 'react-icons/ri'

import { Container, Logo, Form } from './styles'

import logo from '../../assets/supero_cor.svg'

function Header({ handleFilterSubmit }) {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const handleSwitchTheme = () => {
    dispatch(switchTheme())
  }
  return (
    <Container>
      <Logo src={logo} alt="logo-supero" />
      <Form ref={formRef} onSubmit={handleFilterSubmit}>
        <Input
          icon={<FiSearch />}
          placeholder="Busque livros pelo título, autor ou ISBN"
          name="search"
        />
        <Button fill="false" color="primary" size="lg" type="submit">
          BUSCAR
        </Button>
        <Button
          fill="true"
          color="font"
          round="true"
          type="button"
          id="switchtheme"
          onClick={handleSwitchTheme}
        >
          <RiContrastLine />
        </Button>
        <Tooltip target="switchtheme" position="button">
          {' '}
          Mudar tema
        </Tooltip>
      </Form>
    </Container>
  )
}

Header.propTypes = {
  handleFilterSubmit: PropTypes.func.isRequired,
}

export default Header
