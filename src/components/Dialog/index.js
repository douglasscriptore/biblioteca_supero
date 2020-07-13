import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { hide, callbackRequest } from '../../store/modules/dialog/actions'

import history from '../../services/history'

import { DialogContainer } from './styles'

export default function Dialog() {
  const dispatch = useDispatch()
  const {
    show,
    title,
    type,
    text,
    inputType,
    contentHTML,
    timer,
    allowOutsideClick,
    successMessage,
    confirmButtonText,
    cancelButtonText,
    showCancelButton,
    showConfirmButton,
    showCloseButton,
    showLoading,
    callback,
    redirectTo,
  } = useSelector((state) => state.dialog)

  function handleClose() {
    if (redirectTo) {
      history.push(redirectTo)
    }
    dispatch(hide())
  }

  async function handleConfirm(result) {
    if (result.value) {
      if (!!callback && !!callback.method) {
        await dispatch(
          callbackRequest({ mensagem: result.value, successMessage })
        )
      } else {
        if (!!callback && !!callback.onClose) {
          callback.onClose()
        } else {
          dispatch(hide())
        }
      }
    } else {
      if (
        !!result.dismiss &&
        !['close', 'backdrop'].includes(result.dismiss) &&
        !!callback &&
        !!callback.onClose
      ) {
        callback.onClose()
      }
      dispatch(hide())
    }
  }
  const inputAttributes = {
    placeholder: 'Escreva aqui sua observação *',
    required: true,
  }

  return (
    <DialogContainer
      show={show}
      title={title}
      text={text}
      type={type || ''}
      html={contentHTML || ''}
      timer={timer}
      input={inputType}
      allowOutsideClick={allowOutsideClick}
      inputAttributes={inputAttributes}
      showLoading={showLoading}
      showCloseButton={showCloseButton}
      showConfirmButton={showConfirmButton}
      showCancelButton={showCancelButton}
      confirmButtonText={confirmButtonText || 'OK'}
      cancelButtonText={cancelButtonText || 'FECHAR'}
      onClose={handleClose}
      onConfirm={handleConfirm}
    />
  )
}
