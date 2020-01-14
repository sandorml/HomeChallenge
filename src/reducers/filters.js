import { actions_const } from '../actions';

let initialState = {
  
};

const filter = (state = initialState, action) => {

  switch (action.ype) {
    case actions_const.TYPE_FILTER:
      return {
        ...state
      }
    case actions_const.DELETED_FILTER:
      return {
        ...state
      }
    case actions_const.LABEL_FILTER:
      return {
        ...state
      }
    case actions_const.ORDER_BY_PRICE:
      return {
        ...state
      }
    case actions_const.ORDER_BY_SIZE:
      return {
        ...state
      }

    default:
      break;
  }


}

export default filter;