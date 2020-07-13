import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { Form as FormBase } from '@unform/web'

import { Container as ContainerInput } from '../Input/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 10px 0;
  border-bottom: 1px solid
    ${(props) => transparentize(0.4, props.theme.fontColor)};
`

export const Logo = styled.img`
  width: 200px;
  ${(props) =>
    props.theme.name === 'dark' &&
    css`
      filter: brightness(500%) grayscale(10%);
    `}
`
export const Form = styled(FormBase)`
  display: flex;
  align-items: baseline;
  ${ContainerInput} {
    height: 0 !important;
    max-height: 0 !important;
  }
  input {
    width: 300px;
  }
  button {
    margin-left: 15px;
  }
`
