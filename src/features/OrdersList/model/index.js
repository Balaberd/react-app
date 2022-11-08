import orders from "./orders/ordersSlice";
import sorter from "./sorter/sorterSlice";
import filters from "./filters/filtersSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
  sorter,
});

export default rootReducer;
