const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
  checkedOrders: [],
  pageLimit: 30,
  currentPage: 3,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      return { ...state, allOrders: action.payload };
    },
    addOrderSelection(state, action) {
      return {
        ...state,
        checkedOrders: [...state.checkedOrders, action.payload],
      };
    },
    deleteOrderSelection(state, action) {
      return {
        ...state,
        checkedOrders: state.checkedOrders.filter(
          (id) => id !== action.payload
        ),
      };
    },
    checkAllOrders(state) {
      return {
        ...state,
        checkedOrders: state.allOrders.map((order) => order.id),
      };
    },
    deleteAllCheck(state) {
      return {
        ...state,
        checkedOrders: [],
      };
    },
    setCurrentPage(state, action) {
      return { ...state, currentPage: action.payload };
    },
  },
});

export const {
  getOrders,
  addOrderSelection,
  deleteOrderSelection,
  checkAllOrders,
  deleteAllCheck,
  setCurrentPage,
} = ordersSlice.actions;
export default ordersSlice.reducer;
