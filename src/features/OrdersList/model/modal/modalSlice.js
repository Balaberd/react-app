const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isModalFormActive: false,

  orderId: "",
  index: "",
  fullName: "",
  status: "",
  date: "",

  confirmationСodeValue: "",
  confirmationСode: "123",
};

const modalSlice = createSlice({
  name: "modalForm",
  initialState,
  reducers: {
    openModal(state, action) {
      return {
        ...state,
        isModalFormActive: true,
        fullName: `${action.payload.lastName} ${action.payload.firstName} ${action.payload.secondName}`,
        status: action.payload.status,
        orderId: action.payload.id,
        index: action.payload.index,
        date: action.payload.date,
      };
    },
    closeModal() {
      return { ...initialState };
    },
    changeModalValue(state, action) {
      return { ...state, [action.payload.valueName]: action.payload.newValue };
    },
  },
});

export const { openModal, closeModal, changeModalValue } = modalSlice.actions;
export default modalSlice.reducer;
