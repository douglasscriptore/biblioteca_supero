import { all } from "redux-saga/effects";

import dialog from "./dialog/sagas";

export default function* rootSaga() {
  return yield all([dialog]);
}
