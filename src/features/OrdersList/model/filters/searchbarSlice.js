const { createSlice } = require("@reduxjs/toolkit");

const initialState = "";

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    changeSearchbar(state, action) {
      return action.payload;
    },
    resetSearchbar() {
      return "";
    },
  },
});

export const { changeSearchbar, resetSearchbar } = searchbarSlice.actions;
export default searchbarSlice.reducer;
