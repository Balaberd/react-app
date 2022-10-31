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
  const [choosedStatuses, setChoosedStatuses] = useState({
    new: false,
    calculating: false,
    confirm: false,
    postponed: false,
    done: false,
    canceled: false,
  });

  const handleCreator = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(""),
  ];

  const [handleChangeSearchbar, handleResetSearchbar] =
    handleCreator(setSearchbarValues);
  const [handleChangeFilterDateFromValue, handleResetFilterDateFromValue] =
    handleCreator(setFilterDateFromValue);
  const [handleChangeFilterDateToValue, handleResetFilterDateToValue] =
    handleCreator(setFilterDateToValue);
  const [handleChangeFilterSumFromValue, handleResetFilterSumFromValue] =
    handleCreator(setFilterSumFromValue);
  const [handleChangeFilterSumToValue, handleResetFilterSumToValue] =
    handleCreator(setFilterSumToValue);

  const handleResetAllFilters = () => {
    setSearchbarValues("");
    setFilterDateFromValue("");
    setFilterDateToValue("");
    setFilterSumFromValue("");
    setFilterSumToValue("");
    setChoosedStatuses({
      new: false,
      calculating: false,
      confirm: false,
      postponed: false,
      done: false,
      canceled: false,
    });
  };

  const handleChangeStatusChoise = (el) => {
    setChoosedStatuses({ ...choosedStatuses, [el]: !choosedStatuses[el] });
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
          choosedStatuses,
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
