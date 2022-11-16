import orders from "./orders/ordersSlice";
import filters from "./filters/filtersSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
});

export default rootReducer;
