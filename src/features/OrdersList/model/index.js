import orders from "./orders/ordersSlice";
import filters from "./filters/filtersSlice";
import orderForm from "./orderForm/orderFormSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
  orderForm,
});

export default rootReducer;
