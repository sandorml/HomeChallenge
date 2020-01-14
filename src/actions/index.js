export const ADD_PROPERTY = "ADD_PROPERTY";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const DELETE_PROPERTY = "DELETE_PROPERTY";
export const LOAD_PROPERTIES = "LOAD_PROPERTIES";

export const addProperty = () =>
  dispatch => {
    dispatch({
      type: ADD_PROPERTY
    });
  };

export const updateProperty = () =>
  dispatch => {
    dispatch({
      type: UPDATE_PROPERTY
    });
  };

export const deleteProperty = () =>
  dispatch => {
    dispatch({
      type: DELETE_PROPERTY
    });
  };

export const loadProperties = () =>
  dispatch => {
    dispatch({
      type: LOAD_PROPERTIES
    });
  };




