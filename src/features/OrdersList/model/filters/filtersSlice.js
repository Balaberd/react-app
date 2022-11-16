const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchbar: "",

  isAdditionalFiltersActive: false,

  minDate: "",
  maxDate: "",
  checkedStatuses: [],
  minSum: "",
  maxSum: "",

  activeSorter: "date",
  isAscending: true,

  checkedOrdersId: [],

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

    changeMinDate(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        minDate: action.payload,
      };
    },

    changeMaxDate(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        maxDate: action.payload,
      };
    },

    toggleStatusCheck(state, action) {
      if (state.checkedStatuses.includes(action.payload)) {
        return {
          ...state,
          isAdditionalFiltersActive: false,
          checkedStatuses: state.checkedStatuses.filter(
            (status) => status !== action.payload
          ),
        };
      }
      return {
        ...state,
        isAdditionalFiltersActive: false,
        checkedStatuses: [...state.checkedStatuses, action.payload],
      };
    },

    changeMinSum(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        minSum: action.payload,
      };
    },
    changeMaxSum(state, action) {
      return {
        ...state,
        isAdditionalFiltersActive: false,
        maxSum: action.payload,
      };
    },

    activateAdditionalFilters(state) {
      return { ...state, isAdditionalFiltersActive: true, checkedOrdersId: [] };
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

    setOrderCheck(state, action) {
      if (state.checkedOrdersId.includes(action.payload)) {
        return {
          ...state,
          checkedOrdersId: state.checkedOrdersId.filter(
            (id) => id !== action.payload
          ),
        };
      }
      return {
        ...state,
        checkedOrdersId: [...state.checkedOrdersId, action.payload],
      };
    },

    checkAllOrdersOnPage(state, action) {
      return { ...state, checkedOrdersId: action.payload };
    },

    changeCurrentPage(state, action) {
      return { ...state, currentPage: action.payload, checkedOrdersId: [] };
    },
  },
});

export const {
  changeSearchbar,
  changeMinDate,
  changeMaxDate,
  toggleStatus,
  resetAllFilters,
  changeMinSum,
  changeMaxSum,
  toggleFiltersActivation,
  toggleStatusCheck,
  activateAdditionalFilters,
  changeActiveSorter,
  changeSorterDirection,
  setOrderCheck,
  changeCurrentPage,
  checkAllOrdersOnPage,
} = filtersSlice.actions;

export default filtersSlice.reducer;
