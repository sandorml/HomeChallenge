export const actions_const = {
  ADD_PROPERTY: "ADD_PROPERTY",
  UPDATE_PROPERTY: "UPDATE_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
  LOAD_PROPERTIES: "LOAD_PROPERTIES",
  FETCH_PROPERTIES: "FETCH_PROPERTIES",
  FETCH_LABELS: "FETCH_LABELS",
  ADD_LABEL: "ADD_LABEL",
  LOAD_LABELS: "LOAD_LABELS",

  TYPE_FILTER: "TYPE_FILTER",
  PRICE_FILTER: "PRICE_FILTER",
  DELETED_FILTER: "DELETED_FILTER",
  ORDER_BY_PRICE: "ORDER_PRICE",
  ORDER_BY_SIZE: "ORDER_BY_SIZE",

  OFFLINE_FILTER: "OFFLINE_FILTER"

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
  typeFilter:(pattern)=>({
    type: actions_const.TYPE_FILTER,
    pattern: pattern 
  }),
  priceFilter:(pattern,lt=true)=>({
    type: actions_const.PRICE_FILTER,
    pattern: pattern,
    lt: lt
  }),
  deletedFilter:(deleted=true)=>({
    type: actions_const.DELETED_FILTER,
    deleted: deleted 
  }),
  order_by_priceFilter:(order)=>({
    type: actions_const.ORDER_BY_PRICE,
    order: order 
  }),
  order_by_sizeFilter:(order)=>({
    type: actions_const.ORDER_BY_SIZE,
    order: order 
  }),
  offlineFilter:(data,filters)=>({
    type: actions_const.OFFLINE_FILTER,
    data: data,
    filters: filters
  }),
  

}




