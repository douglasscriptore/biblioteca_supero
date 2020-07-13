import styled, { css } from 'styled-components'
import { lighten, darken, desaturate } from 'polished'

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: none;
  overflow: hidden;
  height: 40px;
  min-width: 40px;
  line-height: 1.35em;
  margin: 4px 0;

  box-shadow: none;

  svg {
    margin: 0;

    stroke-width: 2px;
    font-size: 18px;
  }

  ${(props) =>
    props.size === 'sm'
      ? css`
          font-size: 0.75rem;
          border-radius: 0.2857rem;
          padding: 5px 15px;
        `
      : props.size === 'lg'
      ? css`
          font-size: 0.875rem;
          border-radius: 0.4285rem;
          padding: 15px 28px;
        `
      : props.size === 'xsm'
      ? css`
          font-size: 0.675rem;
          padding: 0;
          margin: 0;
          line-height: 28px !important;
          border-radius: 5px;
          height: 28px !important;
          min-width: 28px !important;
        `
      : css`
          font-size: 0.875rem;
          border-radius: 0.4285rem;
          padding: 11px 20px;
        `}

${(props) =>
  props.round === 'true'
    ? css`
        padding: 4px;
        border-radius: 50%;
      `
    : null}


${(props) =>
  props.color === 'default'
    ? props.fill === 'true'
      ? css`
          color: ${props.theme.button.default.out};
          background: transparent;
          border: 1px solid ${props.theme.button.default.out};
          box-shadow: none;

          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: ${props.theme.button.default.out};
          }

          &:disabled {
            opacity: 0.7;
            color: ${lighten(0.5, props.theme.button.default.in)};
            border: 1px solid ${lighten(0.5, props.theme.button.default.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
      : css`
          color: ${lighten(0.5, props.theme.button.default.in)};
         background-image: linear-gradient(to bottom left,
          ${props.theme.button.default.out},
          ${props.theme.button.default.in},
          ${props.theme.button.default.out}) !important
          background-color: ${props.theme.button.default.out};
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
          }
          &:disabled {
            opacity: 0.7;
            color:  ${lighten(0.5, props.theme.button.default.in)};
            border: 1px solid ${lighten(0.1, props.theme.button.default.out)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
    : props.color === 'primary'
    ? props.fill === 'true'
      ? css`
          color: ${props.theme.button.primary.out};
          background: transparent;
          border: 1px solid ${props.theme.button.primary.out};
          box-shadow: none;

          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: ${props.theme.button.primary.out};
          }

          &:disabled {
            opacity: 0.8;
            color: ${lighten(0.1, props.theme.button.primary.in)};
            border: 1px solid ${lighten(0.2, props.theme.button.primary.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
      : css`
          color: ${props.theme.name === 'dark'
            ? lighten(0.35, props.theme.button.primary.in)
            : lighten(0.55, props.theme.button.primary.in)};
          background: -webkit-linear-gradient(
            left,
            transparent 0%,
            ${props.theme.button.primary.in} 50%,
            transparent 100%
          );
          background-color: ${props.theme.button.primary.out};
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
          }
          &:disabled {
            opacity: 0.6;
            color: ${lighten(0.35, props.theme.button.primary.in)};
            border: 1px solid ${lighten(0.2, props.theme.button.primary.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
    : props.color === 'font'
    ? props.fill === 'true'
      ? css`
            color: ${props.theme.fontColor};
            background: transparent;
            /* border: 1px solid ${props.theme.button.primary.out}; */
            box-shadow: none;

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

            &:disabled {
              opacity: 0.6;
              /* color: ${lighten(0.1, props.theme.button.primary.in)}; */
              border: 0;
              box-shadow: none;
              cursor: not-allowed;
              &:hover{
                background-color: transparent;
              }
            }
          `
      : css`
       color: ${lighten(0.35, props.theme.button.primary.in)};
         background-image: linear-gradient(to bottom left,
          ${props.theme.button.primary.out},
          ${props.theme.button.primary.in},
          ${props.theme.button.primary.out}) !important
          background-color: ${props.theme.button.primary.out};
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
          }
          &:disabled {
            opacity: 0.6;
            color: ${lighten(0.35, props.theme.button.primary.in)};
            border: 1px solid ${lighten(0.2, props.theme.button.primary.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
    : props.color === 'success'
    ? props.fill === 'true'
      ? css`
          color: ${props.theme.button.success.out};
          background: transparent;
          border: 1px solid ${props.theme.button.success.out};
          box-shadow: none;

          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: ${props.theme.button.success.out};
            font-weight: 600;
          }

          &:disabled {
            opacity: 0.7;
            color: ${lighten(0.5, props.theme.button.success.in)};
            border: 1px solid ${lighten(0.5, props.theme.button.success.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
      : css`
          color: ${lighten(0.7, props.theme.button.success.in)};
         background-image: linear-gradient(to bottom left,
          ${props.theme.button.success.out},
          ${props.theme.button.success.in},
          ${props.theme.button.success.out}) !important
          background-color: ${props.theme.button.success.out};
          opacity: 0.9;
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
            font-weight: 600;
            opacity: 1;
          }
          &:disabled {
            opacity: 0.6;
            color:  ${lighten(0.8, props.theme.button.success.in)};
            border: 1px solid ${desaturate(1, props.theme.button.success.out)};
            box-shadow: none;
            background-image: none !important;
            background-color: ${desaturate(
              1,
              props.theme.button.success.out
            )} !important;
              cursor: not-allowed;
            &:hover {
              font-weight: 400;
          }
          }
        `
    : props.color === 'warn'
    ? props.fill === 'true'
      ? css`
          color: ${props.theme.button.warn.out};
          background: transparent;
          border: 1px solid ${props.theme.button.warn.out};
          box-shadow: none;
          opacity: 0.9;
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: ${props.theme.button.warn.out};
            font-weight: 600;
            opacity: 1;
          }

          &:disabled {
            opacity: 0.6;
            color: ${lighten(0.5, props.theme.button.warn.in)};
            border: 1px solid ${lighten(0.5, props.theme.button.warn.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
      : css`
          color: ${lighten(0.5, props.theme.button.warn.in)};
         background-image: linear-gradient(to bottom left,
          ${props.theme.button.warn.in},
          ${props.theme.button.warn.out},
          ${props.theme.button.warn.in}) !important
          background-color: ${props.theme.button.warn.in};
          opacity: 0.9;
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
            font-weight: 600;
            opacity: 1;
          }
          &:disabled {
            opacity: 0.6;
            color:  ${lighten(0.5, props.theme.button.warn.in)};
            border: 1px solid ${lighten(0.1, props.theme.button.warn.out)};
            box-shadow: none;
            cursor: not-allowed;
            &:hover {
              font-weight: 600;
          }
        `
    : props.color === 'danger'
    ? props.fill === 'true'
      ? css`
          color: ${props.theme.button.danger.out};
          background: transparent;
          border: 1px solid ${props.theme.button.danger.out};
          box-shadow: none;
          opacity: 0.9;
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: ${props.theme.button.danger.out};
            font-weight: 600;
            opacity: 1;
          }

          &:disabled {
            opacity: 0.7;
            font-weight: 600;
            color: ${lighten(0.5, props.theme.button.danger.in)};
            border: 1px solid ${lighten(0.5, props.theme.button.danger.in)};
            box-shadow: none;
            cursor: not-allowed;
          }
        `
      : css`
          color: ${lighten(0.5, props.theme.button.danger.in)};
         background-image: linear-gradient(to bottom left,
          ${props.theme.button.danger.out},
          ${props.theme.button.danger.in},
          ${props.theme.button.danger.out}) !important
          background-color: ${props.theme.button.danger.out};
          opacity: 0.9;
          &:hover {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            color: #fff;
            font-weight: 600;
            opacity: 1;
          }
          &:disabled {
            opacity: 0.6;
            color:  ${lighten(0.8, props.theme.button.danger.in)};
            border: 1px solid ${desaturate(1, props.theme.button.danger.out)};
            background-image: none !important;
            background-color: ${desaturate(1, props.theme.button.danger.out)}
            box-shadow: none;
            cursor: not-allowed;
            &:hover {
              font-weight: 400
            };
          }
        `
    : ''}



background-size: 210% 210%;
background-position: 100% 0;

transition: all 0.15s ease;

`
