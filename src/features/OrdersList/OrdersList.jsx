import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React, createContext, useState } from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import OrderListTableHeader from "./components/Table/OrderListTableHeader/OrderListTableHeader";
import OrderListTableRow from "./components/Table/OrderListTableRow/OrderListTableRow";
import StatusCell from "./components/Table/StatusCell/StatusCell";
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

  const handleChangeStatusChoise = (el) => {
    setFilterOfStatuses({ ...filterOfStatuses, [el]: !filterOfStatuses[el] });
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
        <Table>
          <OrderListTableHeader />
          <TableBody>
            <OrderListTableRow
              isBodyItem
              isChecked
              handleChangeCheck
              index={12}
              date="10/03/2017"
              status={<StatusCell status="new" />}
              positions={1}
              sum="12312"
              name="IVANOV IVAN"
            />
          </TableBody>
        </Table>
      </div>
    </FiltersContext.Provider>
  );
}

export default OrdersList;
