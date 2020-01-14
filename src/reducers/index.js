import { combineReducers } from 'redux'
import crud from './crud'
import filter from './filter'

const reducer = combineReducers({
  crud,
  filter
})

export default reducer
