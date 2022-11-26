const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  orderId: "",
  index: "",
  customerName: "",
  status: "",
  date: "",

  confirmationСodeValue: "",
  confirmationСode: "123",
};

const orderForm = createSlice({
  name: "orderForm",
  initialState,
  reducers: {
    openModal(state, action) {
      return {
        ...state,
        customerName: action.payload.customerName,
        status: action.payload.status,
        orderId: action.payload.id,
        index: action.payload.index,
        date: action.payload.date,
      };
    },
    closeModal(state) {
      return { ...state, orderId: "", confirmationСodeValue: "" };
    },
    resetForm() {
      return initialState;
    },
    changeModalValue(state, action) {
      return {
        ...state,
        [action.payload.valueName]: action.payload.newValue,
      };
    },
  },
});

export const { openModal, closeModal, changeModalValue, resetForm } =
  orderForm.actions;
export default orderForm.reducer;
