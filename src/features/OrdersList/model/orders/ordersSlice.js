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
    changeOrder(state, action) {
      const newOrders = state.allOrders.map((order) =>
        order.id === action.payload.id
          ? {
              ...order,
              status: action.payload.status,
              lastName: action.payload.lastName,
            }
          : order
      );
      return { ...state, allOrders: newOrders };
    },
    deleteOrders(state, action) {
      const newOrders = state.allOrders.filter(
        (order) => !action.payload.includes(order.id)
      );
      return { ...state, allOrders: newOrders };
    },
  },
});

export const { getOrders, changeOrders, deleteOrders, changeOrder } =
  ordersSlice.actions;
export default ordersSlice.reducer;
