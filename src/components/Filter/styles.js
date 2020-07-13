import styled from 'styled-components'
import { transparentize } from 'polished'

import { Container as ContainerInput } from '../Input/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0 30px 0;
  border-bottom: 1px solid
    ${(props) => transparentize(0.4, props.theme.fontColor)};
  span {
    opacity: 0.7;

    font-style: italic;
  }
  form {
    display: flex;
    align-items: baseline;

    p {
      margin-right: 15px;
    }

    ${ContainerInput} {
      height: 0 !important;
      max-height: 0 !important;
    }
  }
`
