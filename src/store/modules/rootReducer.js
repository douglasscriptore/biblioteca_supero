import { combineReducers } from 'redux'
import dialog from './dialog/reducer.js'
import theme from './theme/reducer.js'

export default combineReducers({ dialog, theme })
