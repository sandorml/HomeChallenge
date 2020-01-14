import {
  ADD_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  LOAD_PROPERTIES
} from '../actions';

let initialState = {
  properties: []
};

const crud = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PROPERTY:
      return {
        ...state
      }
    case UPDATE_PROPERTY:
      return {
        ...state
      }
    case DELETE_PROPERTY:
      return {
        ...state
      }
    case LOAD_PROPERTIES:
      return {
        ...state
      }
    default:
      return state
  }
}

export default crud
