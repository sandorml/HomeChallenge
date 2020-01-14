import { actions_const } from '../actions';

let initialState = {
  properties: []
};

const crud = (state = initialState, action) => {
  switch (action.type) {

    case actions_const.ADD_PROPERTY:
      return {
        ...state
      }
    case actions_const.UPDATE_PROPERTY:
      return {
        ...state
      }
    case actions_const.DELETE_PROPERTY:
      return {
        ...state
      }
    case actions_const.LOAD_PROPERTIES:
      return {
        ...state,
        properties: action.data
      }
    case actions_const.FETCH_PROPERTIES:
      return {
        ...state
      }
    default:
      return state
  }
}

export default crud
