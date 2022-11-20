const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
  checkedOrdersID: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      return { ...state, allOrders: action.payload };
    },

    toggleOrderCheck(state, action) {
      if (state.checkedOrdersID.includes(action.payload)) {
        return {
          ...state,
          checkedOrdersID: state.checkedOrdersID.filter(
            (id) => id !== action.payload
          ),
        };
      }
      return {
        ...state,
        checkedOrdersID: [...state.checkedOrdersID, action.payload],
      };
    },
    resetCheckedOrders(state) {
      return { ...state, checkedOrdersID: [] };
    },
    checkAllOrdersOnPage(state, action) {
      return { ...state, checkedOrdersID: action.payload };
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
              customerName: action.payload.customerName,
            }
          : order
      );
      return { ...state, allOrders: newOrders };
    },
    deleteCheckedOrders(state) {
      return {
        ...state,
        allOrders: state.allOrders.filter(
          (order) => !state.checkedOrdersID.includes(order.id)
        ),
        checkedOrdersID: [],
      };
    },
  },
});

export const {
  getOrders,
  changeOrders,
  deleteCheckedOrders,
  changeOrder,
  toggleOrderCheck,
  resetCheckedOrders,
  checkAllOrdersOnPage,
} = ordersSlice.actions;
export default ordersSlice.reducer;
