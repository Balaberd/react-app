/* eslint-disable prettier/prettier */
import rootReducer from "./model";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: rootReducer,
});

export default store;
