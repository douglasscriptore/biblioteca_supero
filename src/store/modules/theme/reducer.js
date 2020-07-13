import produce from 'immer'

const INITIAL_STATE = {
  isDarkTheme: true,
}

export default function theme(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SWITCH_THEME': {
        draft.isDarkTheme = !draft.isDarkTheme
        break
      }
      default:
    }
  })
}
