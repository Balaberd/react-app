const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchbar: "",

  isFiltersActive: false,

  minDate: "",
  maxDate: "",
  statuses: {
    new: false,
    calculating: false,
    confirm: false,
    postponed: false,
    done: false,
    canceled: false,
  },
  minSum: "",
  maxSum: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearchbar(state, action) {
      return { ...state, searchbar: action.payload };
    },
    resetSearchbar(state) {
      return { ...state, searchbar: "" };
    },
    changeMinDate(state, action) {
      return { ...state, minDate: action.payload };
    },
    changeMaxDate(state, action) {
      return { ...state, maxDate: action.payload };
    },
    resetMinDate(state) {
      return { ...state, minDate: "" };
    },
    resetMaxDate(state) {
      return { ...state, maxDate: "" };
    },
    toggleStatus(state, action) {
      return {
        ...state,
        statuses: {
          ...state.statuses,
          [action.payload]: !state.statuses[action.payload],
        },
      };
    },
    changeMinSum(state, action) {
      return { ...state, minSum: action.payload };
    },
    changeMaxSum(state, action) {
      return { ...state, maxSum: action.payload };
    },
    resetMinSum(state) {
      return { ...state, minSum: "" };
    },
    resetMaxSum(state) {
      return { ...state, maxSum: "" };
    },
    toggleFiltersActivation(state) {
      return { ...state, isFiltersActive: !state.isFiltersActive };
    },
    resetAllFilters() {
      return initialState;
    },
  },
});

export const {
  changeSearchbar,
  resetSearchbar,
  changeMinDate,
  changeMaxDate,
  resetMinDate,
  resetMaxDate,
  toggleStatus,
  resetAllFilters,
  changeMinSum,
  changeMaxSum,
  resetMinSum,
  resetMaxSum,
  toggleFiltersActivation,
} = filtersSlice.actions;

export default filtersSlice.reducer;
