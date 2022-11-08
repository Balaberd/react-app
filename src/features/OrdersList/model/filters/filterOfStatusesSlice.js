const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  new: false,
  calculating: false,
  confirm: false,
  postponed: false,
  done: false,
  canceled: false,
};
// стейт статусов в виде объекта т.к. из него UI получает инфу о ВСЕХ статусах и рисует селектор

const filterOfStatusesSlice = createSlice({
  name: "filterOfStatuses",
  initialState,
  reducers: {
    toggleStatus(state, action) {
      return { ...state, [action.payload]: !state[action.payload] };
    },
    resetChoosedStatuses() {
      return initialState;
    },
  },
});

export const { toggleStatus, resetChoosedStatuses } =
  filterOfStatusesSlice.actions;
export default filterOfStatusesSlice.reducer;
