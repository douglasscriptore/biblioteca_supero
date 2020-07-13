import styled, { css } from 'styled-components'
import { darken, lighten, desaturate, transparentize } from 'polished'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  margin: 0px;
  height: 59px;
  max-height: 59px;

  &:last-of-type {
    margin: 0px;
  }

  /* ICON ERROR */
  i {
    text-decoration: none;
    font-style: normal;
    color: ${props => props.theme.error};
    position: absolute;
    align-self: flex-end;
    padding: 0.65rem 0.6rem 0rem 0.6rem;
    svg {
      font-size: 0.875rem;
    }
  }

  /* ICON */
  ${props =>
    props.icon &&
    css`
      div {
        margin: 0.6rem;
        position: absolute;
        display: flex;
        align-self: flex-start;

        svg {
          stroke-width: 1px;
          font-size: 18px;
          color: ${props => props.theme.fontColor};
        }
        span {
          margin-left: 5px;
          border-right: 1px solid ${props => props.theme.fontColor};
          opacity: 0.3;
        }
      }
    `}
`

export const ErrorMessage = styled.span`
  margin-top: 1.5px;
  align-self: flex-start;
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  font-size: 0.75rem;
  color: ${props => props.theme.error};
`

export const Input = styled.input`
  border-radius: 4px;
  height: 38px;
  min-height: 38px;
  transition: border 0.3s ease;
  color: ${props => props.theme.fontColor};
  background: ${props =>
    props.theme.name === 'dark'
      ? lighten(0.05, props.theme.cardBackgroud)
      : darken(0.01, props.theme.cardBackgroud)};

  border: 1px solid
    ${props =>
      props.theme.name === 'dark'
        ? lighten(0.1, props.theme.cardBackgroud)
        : darken(0.15, props.theme.cardBackgroud)};
  ${({ error }) =>
    error === 'true' &&
    css`
      border-color: ${props => props.theme.error};
    `}
  &:focus {
    border-color: ${props => desaturate(0.5, props.theme.button.primary.in)};
  }

  ${props =>
    props.icon === 'true'
      ? css`
          padding: 0 15px 0px 40px;
        `
      : css`
          padding: 0 15px;
        `}

  ${props =>
    props.error === 'true' &&
    css`
      padding: ${props.icon === 'true' ? '0 25px 0px 40px' : '0 15px'};
    `}

  &::placeholder {
    opacity: 0.6;
    color: ${props => props.theme.fontColor};
  }

  &:disabled {
    opacity: 0.8;
    color: ${props => transparentize(0.2, props.theme.fontColor)};
    cursor: not-allowed;
  }
`
