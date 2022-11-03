import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React, createContext, useState } from "react";
import styles from "./OrdersList.module.css";

export const FiltersContext = createContext();

function OrdersList() {
  const [searchbarValue, setSearchbarValues] = useState("");
  const [filterDateFromValue, setFilterDateFromValue] = useState("");
  const [filterDateToValue, setFilterDateToValue] = useState("");
  const [filterSumFromValue, setFilterSumFromValue] = useState("");
  const [filterSumToValue, setFilterSumToValue] = useState("");
  const [filterOfStatuses, setFilterOfStatuses] = useState({
    new: false,
    calculating: false,
    confirm: false,
    postponed: false,
    done: false,
    canceled: false,
  });

  const createHandleChange = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(""),
  ];

  const [handleChangeSearchbar, handleResetSearchbar] =
    createHandleChange(setSearchbarValues);
  const [handleChangeFilterDateFromValue, handleResetFilterDateFromValue] =
    createHandleChange(setFilterDateFromValue);
  const [handleChangeFilterDateToValue, handleResetFilterDateToValue] =
    createHandleChange(setFilterDateToValue);
  const [handleChangeFilterSumFromValue, handleResetFilterSumFromValue] =
    createHandleChange(setFilterSumFromValue);
  const [handleChangeFilterSumToValue, handleResetFilterSumToValue] =
    createHandleChange(setFilterSumToValue);

  const handleResetAllFilters = () => {
    setSearchbarValues("");
    setFilterDateFromValue("");
    setFilterDateToValue("");
    setFilterSumFromValue("");
    setFilterSumToValue("");
    setFilterOfStatuses({
      new: false,
      calculating: false,
      confirm: false,
      postponed: false,
      done: false,
      canceled: false,
    });
  };

  const handleChangeStatusChoise = (status) => {
    setFilterOfStatuses({
      ...filterOfStatuses,
      [status]: !filterOfStatuses[status],
    });
  };

  return (
    <FiltersContext.Provider
      value={
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        {
          searchbarValue,
          handleChangeSearchbar,
          handleResetSearchbar,
          filterDateFromValue,
          handleChangeFilterDateFromValue,
          handleResetFilterDateFromValue,
          filterDateToValue,
          handleChangeFilterDateToValue,
          handleResetFilterDateToValue,
          filterSumFromValue,
          handleChangeFilterSumFromValue,
          handleResetFilterSumFromValue,
          filterSumToValue,
          handleChangeFilterSumToValue,
          handleResetFilterSumToValue,
          filterOfStatuses,
          handleChangeStatusChoise,
          handleResetAllFilters,
        }
      }
    >
      <div className={styles.pageWrapper}>
        <Header />
        <Filter />
      </div>
    </FiltersContext.Provider>
  );
}

export default OrdersList;
