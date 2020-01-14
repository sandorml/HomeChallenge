import { actions_const } from '../actions';

let initialState = {
  properties: [],
  labels: []
};

const crud = (state = initialState, action) => {
  switch (action.type) {
    case actions_const.LOAD_PROPERTIES:
      return {
        ...state,
        properties: [...action.data]
      }
    case actions_const.FETCH_PROPERTIES:
      return {
        ...state
      }
    case actions_const.LOAD_LABELS:
      return {
        ...state,
        labels: [...action.data]
      }
    default:
      return state
  }
}

export default crud
