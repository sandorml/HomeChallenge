export const actions_const = {
  ADD_PROPERTY: "ADD_PROPERTY",
  UPDATE_PROPERTY: "UPDATE_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
  LOAD_PROPERTIES: "LOAD_PROPERTIES",
  FETCH_PROPERTIES: "FETCH_PROPERTIES"
}

export const actions_func = {
  addProperty: () => ({
    type: actions_const.ADD_PROPERTY
  }),

  updateProperty: () => ({
    type: actions_const.UPDATE_PROPERTY
  }),

  deleteProperty: () => ({
    type: actions_const.DELETE_PROPERTY
  }),

  loadProperties: (data) => ({
    type: actions_const.LOAD_PROPERTIES,
    data: data
  }),
  fetchProperties: () =>({
    type: actions_const.FETCH_PROPERTIES
  })

}




