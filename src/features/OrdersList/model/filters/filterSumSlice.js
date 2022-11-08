const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sumFrom: "",
  sumTo: "",
};

const filterSumSlice = createSlice({
  name: "filtersSum",
  initialState,
  reducers: {
    changeSumFrom(state, action) {
      return { ...state, sumFrom: action.payload };
    },
    changeSumTo(state, action) {
      return { ...state, sumTo: action.payload };
    },
    resetSumFrom(state) {
      return { ...state, sumFrom: "" };
    },
    resetSumTo(state) {
      return { ...state, sumTo: "" };
    },
  },
});

export const { changeSumFrom, changeSumTo, resetSumFrom, resetSumTo } =
  filterSumSlice.actions;
export default filterSumSlice.reducer;
