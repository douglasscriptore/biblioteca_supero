import styled, { createGlobalStyle, css } from 'styled-components'
import { lighten, darken, desaturate, transparentize } from 'polished'

import { ToastContainer as ToastContainerBase } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-toastify/dist/ReactToastify.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800');
@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
  

 *{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;

  }

  *, :after, :before {
    box-sizing: border-box;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6,p,span,strong{
    color: ${(props) => props.theme.fontColor};
  }

  button {
    cursor: pointer;
  }

/* DIALOG CSS */
.swal2-height-auto{
  background: ${(props) => props.theme.background};
}

.swal2-shown{
  >div{

    background: ${(props) => props.theme.cardBackgroud};
  }
}

.swal2-icon{

  span {
    font-size: inherit;
  }
}

.swal2-success-circular-line-left, .swal2-success-circular-line-right, .swal2-success-fix{
  background-color: transparent !important;
}

.swal2-icon.swal2-info {
  border-color: ${(props) => props.theme.info} !important;
  color: ${(props) => props.theme.info} !important;
}

.swal2-icon.swal2-question{
  border-color: ${(props) => props.theme.info} !important;
  color: ${(props) => props.theme.info} !important;
}

.swal2-popup {
    width:fit-content !important;
    padding: 0 !important;
  }

.swal2-content{
  width: 40em;
  min-width: 20em;
  color:  ${(props) => props.theme.fontColor} !important;
  padding: 0 1.65rem 1.65rem 1.65rem  !important;
  max-width: 50em;
  input{
    font: .875rem 'Poppins', sans-serif !important;
  width: 90%;
  padding: 0 1rem !important;
  border-radius: 4px;
  height: 38px;
  transition: border 0.3s ease;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) =>
    props.theme.name === 'dark'
      ? lighten(0.05, props.theme.cardBackgroud)
      : darken(0.01, props.theme.cardBackgroud)};

  border: 1px solid
    ${(props) =>
      props.theme.name === 'dark'
        ? lighten(0.1, props.theme.cardBackgroud)
        : darken(0.15, props.theme.cardBackgroud)};
  ${({ error }) =>
    error === 'true' &&
    css`
      border-color: ${(props) => props.theme.error};
    `}
  &:focus {
    border-color: ${(props) => desaturate(0.5, props.theme.button.primary.in)};
  }
  }

  >div{
    *{
      color:  ${(props) => props.theme.fontColor};
    }
    img{

      border-radius: 5px;
    }
    div{
      display: flex;
      flex-direction: row;
      /* padding: 0 1.65rem 0 1.65rem !important; */
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        
          li {
            display: flex;

            font-size: 1.05rem !important;
            font-weight: 300;
            display: flex;
            padding: 8px 0;
            align-items: center;
            justify-content: space-between;
            text-transform: uppercase;
            &:first-of-type {
              margin-top: 0;
            }

      strong {
        display: flex;
        align-items: flex-start;
    
        font-weight: 400;
        text-transform: capitalize;
        img{
           margin-left: 5px;
        }
      }
      border-bottom: 1px solid ${(props) =>
        transparentize(0.7, props.theme.fontColor)};

      &:last-of-type {
        border-bottom: 0px;
      }
    }


  }
  }
  }


}

.swal2-actions {
  padding: 0 !important;
  margin:0.65rem 0 0.65rem 0  !important;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 0.875rem !important;
    border: none;
    overflow: hidden;
    height: 40px;
    line-height: 1.35em;
    margin: 4px 0;
    background-color: ${(props) => props.theme.button.primary.out} !important;

    &:focus{
      box-shadow: none !important;
    }
  }
}

.swal2-confirm,.swal2-cancel{
        margin: 0 5px !important;
}

.swal2-confirm{

}

.swal2-cancel.swal2-styled{
  background-color: ${(props) => props.theme.button.default.out} !important;
}

.swal2-loading{
  padding: 2rem !important;
}



`

export const ToastContainer = styled(ToastContainerBase).attrs({
  // custom props
})`
  .Toastify__toast-container {
    z-index: 9999 !important;
  }
  .Toastify__toast {
    background-color: ${(props) => props.theme.info};
  }
  .Toastify__toast--error {
    background-color: ${(props) => props.theme.error};
  }
  .Toastify__toast--warning {
    background-color: ${(props) => props.theme.warn};
  }
  .Toastify__toast--success {
    background-color: ${(props) => props.theme.success};
  }
  .Toastify__toast-body {
    font-size: 1.02rem;
    font-weight: 600;
    color: #fff;
  }
  .Toastify__progress-bar {
  }
`

export const Scroll = styled(PerfectScrollbar)`
  max-height: ${(props) =>
    props.height ? props.height : 'calc(100vh - 220px)'};
  padding: 0px 15px;
`
