import styled, { css } from 'styled-components'
import { transparentize, lighten, darken } from 'polished'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  thead {
    tr {
      th {
        text-align: left;
        padding: 10px 0px 10px 0px;
        color: ${(props) => props.theme.fontColor};
        font-size: 1.0625rem;
        font-weight: 400 !important;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 0.1px solid
        ${(props) => transparentize(0.7, props.theme.fontColor)};
      &:last-of-type {
        border-bottom: none;
      }
      td {
        padding: 10px 0px;
        max-width: 600px;
        font-size: 1.0625rem;
        color: ${(props) => props.theme.fontColor};
        span {
          opacity: 0.7;
          font-size: 0.85rem;
          font-style: italic;
        }
        button {
          margin: 0;
        }
      }

      &:hover {
        transition: all 0.25s ease;
        ${(props) =>
          props.theme.name === 'dark'
            ? css`
                background-color: ${(props) =>
                  lighten(0.03, props.theme.cardBackgroud)};
              `
            : css`
                background-color: ${(props) =>
                  darken(0.03, props.theme.cardBackgroud)};
              `}
      }
    }
  }
`

export const Align = styled.div`
  justify-content: ${({ align }) =>
    align === 'right'
      ? 'flex-end'
      : align === 'center'
      ? 'center'
      : 'flex-start'};

  display: flex;
  color: ${(props) => props.theme.fontColor};
  font-size: 1.0625rem;
  font-weight: 400 !important;
`
