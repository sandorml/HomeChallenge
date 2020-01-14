export const actions_const = {
  ADD_PROPERTY: "ADD_PROPERTY",
  UPDATE_PROPERTY: "UPDATE_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
  LOAD_PROPERTIES: "LOAD_PROPERTIES"
}

export const actions_func = {
  addProperty: () =>
    dispatch => {
      dispatch({
        type: actions_const.ADD_PROPERTY
      });
    },

  updateProperty: () =>
    dispatch => {
      dispatch({
        type: actions_const.UPDATE_PROPERTY
      });
    },

  deleteProperty: () =>
    dispatch => {
      dispatch({
        type: actions_const.DELETE_PROPERTY
      });
    },

  loadProperties: () =>
    dispatch => {
      dispatch({
        type: actions_const.LOAD_PROPERTIES
      });
    },

}




