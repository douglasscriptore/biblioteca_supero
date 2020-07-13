import produce from "immer";

import { Type } from "./actions";

const INITIAL_STATE = {
  show: false,
  title: "",
  text: "",
  type: "",
  contentHTML: "",
  inputType: "",
  allowOutsideClick: false,
  showCancelButton: false,
  showConfirmButton: true,
  showCloseButton: false,
  showLoading: false,
  callback: { success: { action: "" } },
  timer: null,
  successMessage: null,
  confirmButtonText: "",
  cancelButtonText: "",
  redirectTo: null,
};

export default function dialog(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Type.SHOW:
        draft.show = true;
        draft.type = action.payload.type;
        draft.title = action.payload.title;
        draft.text = action.payload.text;
        draft.inputType = action.payload.inputType;
        draft.allowOutsideClick =
          action.payload.allowOutsideClick !== undefined
            ? action.payload.allowOutsideClick
            : true;
        draft.contentHTML = action.payload.contentHTML;
        draft.confirmButtonText = action.payload.confirmButtonText;
        draft.cancelButtonText = action.payload.cancelButtonText;
        draft.showConfirmButton = action.payload.showConfirmButton;
        draft.showCancelButton =
          action.payload.showCancelButton !== undefined
            ? action.payload.showCancelButton
            : true;
        draft.timer = action.payload.timer;
        draft.successMessage = action.payload.successMessage;
        draft.showCloseButton = action.payload.showCloseButton;
        draft.callback = action.payload.callback;
        draft.showLoading = action.payload.showLoading || false;

        draft.redirectTo = action.payload.redirectTo
          ? action.payload.redirectTo
          : null;

        break;
      case Type.HIDE:
        draft.show = false;
        draft.showLoading = false;
        draft.cancelButtonText = "";
        draft.contentHTML = "";
        draft.time = null;
        draft.redirectTo = null;

        break;
      case Type.CALLBACK_REQUEST:
        draft.showLoading = true;
        draft.show = true;
        draft.type = "";
        draft.inputType = "";
        draft.text = "";
        draft.showCloseButton = false;
        draft.showCancelButton = false;
        draft.showConfirmButton = false;
        break;
      case Type.CALLBACK_SUCCESS:
        draft.show = true;
        draft.timer = 2000;
        draft.showLoading = false;
        draft.type = "success";
        draft.text = action.payload.text;
        draft.callback = action.payload.callback;
        break;
      case Type.ERROR:
        draft.show = true;
        draft.showLoading = false;
        draft.type = "error";
        draft.text = action.payload.error;
        draft.inputType = "";
        draft.showCancelButton = true;
        draft.cancelButtonText = "FECHAR";
        break;
      default:
        return state;
    }
  });
}
