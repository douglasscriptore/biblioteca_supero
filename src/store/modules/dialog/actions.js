export const Type = {
  SHOW: "@dialog/SHOW",
  HIDE: "@dialog/HIDE",
  CALLBACK_REQUEST: "@dialog/CALLBACK_REQUEST",
  CALLBACK_SUCCESS: "@dialog/CALLBACK_SUCCESS",
  ERROR: "@dialog/ERROR",
};

export function show(options) {
  return {
    type: Type.SHOW,
    payload: { ...options },
  };
}

export function hide() {
  return {
    type: Type.HIDE,
  };
}

export function callbackRequest({ mensagem, successMessage }) {
  return {
    type: Type.CALLBACK_REQUEST,
    payload: { mensagem, successMessage },
  };
}

export function callbackSuccess(options) {
  return {
    type: Type.CALLBACK_SUCCESS,
    payload: { ...options },
  };
}

export function dialogError(error) {
  return {
    type: Type.ERROR,
    payload: { error },
  };
}
