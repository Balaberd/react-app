const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      return { ...state, allOrders: action.payload };
    },
    changeOrders(state, action) {
      const newOrders = state.allOrders.map((order) =>
        action.payload.checkedOrders.includes(order.id)
          ? { ...order, status: action.payload.newStatus }
          : order
      );
      return { ...state, allOrders: newOrders };
    },
  },
});

export const { getOrders, changeOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
