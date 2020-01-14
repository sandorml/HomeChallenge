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
    case actions_const.OFFLINE_FILTER:
      let { data, filters } = action;
      for (let i = 0; i < filters.length; i++) {
        data = action.filters[i](data)
      }
      return {
        ...state,
        properties: data
      }
    default:
      return state
  }
}

export default crud
