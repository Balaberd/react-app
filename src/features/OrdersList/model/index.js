import orders from "./orders/ordersSlice";
import filters from "./filters/filtersSlice";
import modal from "./modal/modalSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
  modal,
});

export default rootReducer;
