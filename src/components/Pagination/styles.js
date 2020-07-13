import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'
import {
  Pagination as PaginationBase,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

export const Pagination = styled(PaginationBase)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }
`

export const Item = styled(PaginationItem)`
  margin: 0 1px 0;
  user-select: none;
`

export const Button = styled(PaginationLink)`
  background: none;
  border: 0;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  user-select: none;
  align-items: center;
  border-radius: 50%;
  color: ${(props) => props.theme.fontColor};
  opacity: 0.9;

  background-position: 100% 0;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  &:hover {
    ${(props) =>
      props.theme.name === 'dark'
        ? css`
            background-color: ${(props) =>
              lighten(0.1, props.theme.cardBackgroud)};
          `
        : css`
            background-color: ${(props) =>
              darken(0.1, props.theme.cardBackgroud)};
          `}
  }

  ${({ active, disabled }) =>
    active === 'true' &&
    css`
      z-index: 0;
      font-weight: 400;

      background-color: ${(props) => props.theme.button.primary.in};

      &:hover {
        opacity: 1;
        background-color: ${(props) => props.theme.button.primary.out};
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      &:hover {
        background-color: transparent;
      }
    `}
`
