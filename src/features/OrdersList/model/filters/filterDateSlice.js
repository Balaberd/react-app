const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dateFrom: "",
  dateTo: "",
};

const filterDateSlice = createSlice({
  name: "filtersDate",
  initialState,
  reducers: {
    changeDateFrom(state, action) {
      return { ...state, dateFrom: action.payload };
    },
    changeDateTo(state, action) {
      return { ...state, dateTo: action.payload };
    },
    resetDateFrom(state) {
      return { ...state, dateFrom: "" };
    },
    resetDateTo(state) {
      return { ...state, dateTo: "" };
    },
  },
});

export const { changeDateFrom, changeDateTo, resetDateFrom, resetDateTo } =
  filterDateSlice.actions;
export default filterDateSlice.reducer;
