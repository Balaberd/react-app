import searchbar from "./filters/searchbarSlice";
import filterDate from "./filters/filterDateSlice";
import filterSum from "./filters/filterSumSlice";
import filterOfStatuses from "./filters/filterOfStatusesSlice";
import orders from "./orders/ordersSlice";
import sorter from "./sorter/sorterSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  searchbar,
  filterDate,
  filterSum,
  filterOfStatuses,
  orders,
  sorter,
});

export default rootReducer;
