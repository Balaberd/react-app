const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  activeSorter: "date",
  isIncreaseDirection: true,
};

const sorterSlice = createSlice({
  name: "sorter",
  initialState,
  reducers: {
    changeSorter(state, action) {
      return { ...state, activeSorter: action.payload };
    },
    changeSortDirection(state) {
      return { ...state, isIncreaseDirection: !state.isIncreaseDirection };
    },
  },
});

export const { changeSorter, changeSortDirection } = sorterSlice.actions;
export default sorterSlice.reducer;
