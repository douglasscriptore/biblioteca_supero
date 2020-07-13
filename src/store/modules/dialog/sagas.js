import { takeLatest, call, put, all, select, delay } from "redux-saga/effects";

import { Type, hide, callbackSuccess, dialogError } from "./actions";

export function* callback({ payload }) {
  const { callback } = yield select((state) => state.dialog);

  try {
    const data = { ...callback.data, obseng: payload.mensagem };

    const response = yield call(callback.method, callback.url, data);
    yield put(hide());
    yield delay(100);

    yield put(
      callbackSuccess({
        text: payload.successMessage,
        callback: {
          success: {
            action: callback.action || "success",
            data: response.data || null,
          },
        },
      })
    );
  } catch (error) {
    console.log(error);
    yield put(dialogError(error.response.data.message));
  }
}

export default all([takeLatest(Type.CALLBACK_REQUEST, callback)]);
