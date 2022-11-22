const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchbar: "",

  minDate: null,
  maxDate: null,
  choosedStatuses: [],
  minSum: null,
  maxSum: null,

  activeSorter: "date",
  isAscending: true,

  pageLimit: 30,
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearchbar(state, action) {
      return {
        ...state,
        searchbar: action.payload,
        checkedOrdersId: [],
      };
    },
    getAdditionalFilterValues(state, action) {
      return {
        ...state,
        minDate: action.payload.minDate,
        maxDate: action.payload.maxDate,
        choosedStatuses: action.payload.choosedStatuses,
        minSum: action.payload.minSum,
        maxSum: action.payload.maxSum,
      };
    },

    changeActiveSorter(state, action) {
      return {
        ...state,
        activeSorter: action.payload,
      };
    },
    changeSorterDirection(state) {
      return { ...state, isAscending: !state.isAscending };
    },
    resetAllFilters() {
      return initialState;
    },
    changeCurrentPage(state, action) {
      return { ...state, currentPage: action.payload };
    },
  },
});

export const {
  changeSearchbar,
  resetAllFilters,
  changeActiveSorter,
  changeSorterDirection,
  changeCurrentPage,
  getAdditionalFilterValues,
} = filtersSlice.actions;

export default filtersSlice.reducer;
