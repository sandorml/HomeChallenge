export const actions_const = {
  ADD_PROPERTY: "ADD_PROPERTY",
  UPDATE_PROPERTY: "UPDATE_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
  LOAD_PROPERTIES: "LOAD_PROPERTIES",
  FETCH_PROPERTIES: "FETCH_PROPERTIES",
  FETCH_LABELS: "FETCH_LABELS",
  ADD_LABEL: "ADD_LABEL",
  LOAD_LABELS: "LOAD_LABELS"

}

export const actions_func = {
  addProperty: (item) => ({
    type: actions_const.ADD_PROPERTY,
    item: item
  }),

  updateProperty: (item) => ({
    type: actions_const.UPDATE_PROPERTY,
    item: item
  }),

  deleteProperty: (item) => ({
    type: actions_const.DELETE_PROPERTY,
    item: item
  }),

  loadProperties: (data) => ({
    type: actions_const.LOAD_PROPERTIES,
    data: data
  }),
  fetchProperties: () =>({
    type: actions_const.FETCH_PROPERTIES
  }),
  fetchLabels: () =>({
    type: actions_const.FETCH_LABELS
  }),
  addLabel: (item) =>({
    type: actions_const.ADD_LABEL,
    item: item
  }),
  loadLabels: (data) => ({
    type: actions_const.LOAD_LABELS,
    data: data
  }),
  

}




