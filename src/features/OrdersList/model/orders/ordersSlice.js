const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
  chechedOrders: [],
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
        chechedOrders: [...state.chechedOrders, action.payload],
      };
    },
    deleteOrderSelection(state, action) {
      return {
        ...state,
        chechedOrders: state.chechedOrders.filter(
          (id) => id !== action.payload
        ),
      };
    },
    checkAllOrders(state) {
      return {
        ...state,
        chechedOrders: state.allOrders.map((order) => order.id),
      };
    },
    deleteAllCheck(state) {
      return {
        ...state,
        chechedOrders: [],
      };
    },
  },
});

export const {
  getOrders,
  addOrderSelection,
  deleteOrderSelection,
  checkAllOrders,
  deleteAllCheck,
} = ordersSlice.actions;
export default ordersSlice.reducer;
