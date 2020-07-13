import styled, { css } from 'styled-components'
import { UncontrolledTooltip } from 'reactstrap'

export const TooltipComponent = styled(UncontrolledTooltip)`
  position: absolute;
  will-change: transform;
  top: 0px;
  left: 0px;
  z-index: 1005;
  margin: ${(props) => (props.placement === 'bottom' ? '10px 0 0 0' : '')};
  margin: ${(props) => (props.placement === 'left' ? '0 0 0 -10px' : '')};
  margin: ${(props) => (props.placement === 'right' ? '0 0 0 10px' : '')};
  margin: ${(props) => (props.placement === 'top' ? '-10px 0 0' : '')};

 > div {

    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme.tooltip.fontColor};
    text-align: center;
    background-color:${(props) => props.theme.tooltip.background};
    border-radius: 0.25rem;
    box-shadow: 0 1px 4px rgba(50, 50, 93, 0.1),
    0 2px 4px rgba(50, 50, 93, 0.15), 0 1px 4px rgba(0, 0, 0, 0.1);



    &::before {
      position: absolute;
      width: 0;
      height: 0;
      vertical-align: middle;
      content: '';

      ${(props) =>
        props.placement === 'bottom' &&
        css`
          top: -5px;
          left: auto;
          right: 50%;
          color: ${(props) => props.theme.tooltip.background};
          border-bottom: 0.4em solid;
          border-right: 0.4em solid transparent;
          border-left: 0.4em solid transparent;
        `}

      ${(props) =>
        props.placement === 'left' &&
        css`
          top: 35%;
          left: auto;
          right: -5px;
          color: ${(props) => props.theme.tooltip.background};
          border-top: 0.4em solid transparent;
          border-bottom: 0.4em solid transparent;
          border-left: 0.4em solid;
        `}

        ${(props) =>
          props.placement === 'right' &&
          css`
            top: 35%;
            left: -5px;
            right: auto;
            color: ${(props) => props.theme.tooltip.background};
            border-top: 0.4em solid transparent;
            border-bottom: 0.4em solid transparent;
            border-right: 0.4em solid;
          `}


        ${(props) =>
          props.placement === 'top' &&
          css`
            top: 100%;
            left: auto;
            bottom: -5px;
            right: 40%;
            color: ${(props) => props.theme.tooltip.background};
            border-top: 0.4em solid;
            border-right: 0.4em solid transparent;
            border-left: 0.4em solid transparent;
          `}
  }
 }
`

export const Content = styled.div`
  font-size: 1.03rem;
  max-width: 200px;
  * {
    color: ${(props) => props.theme.tooltip.fontColor};
  }
`
