import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React, createContext, useState } from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import OrderListTableBodyRow from "./components/Table/OrderListTableBodyRow";
import OrderListTableFooter from "./components/Table/OrderListTableFooter/OrderListTableFooter";
import OrderListTableHeaderRow from "./components/Table/OrderListTableHeaderRow";
import orders from "./lib/orders";
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
  const [activeSorter, setActiveSorter] = useState("date");
  const [checkedRows, setCheckedRows] = useState([]);

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

  const handleToggleRowCheck = (rowId) => {
    if (checkedRows.includes(rowId)) {
      setCheckedRows(checkedRows.filter((id) => rowId !== id));
    } else {
      const newCheckedRows = [...checkedRows];
      newCheckedRows.push(rowId);
      setCheckedRows(newCheckedRows);
    }
  };

  const checkAllRows = () => {
    if (orders.length === checkedRows.length) {
      setCheckedRows([]);
    } else setCheckedRows(orders.map((order) => order.id));
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
          <OrderListTableHeaderRow
            isAllRowChecked={orders.length === checkedRows.length}
            activeSorter={activeSorter}
            setActiveSorter={setActiveSorter}
            checkAllRows={checkAllRows}
          />
          <TableBody>
            {orders.map((order) => (
              <OrderListTableBodyRow
                key={order.id}
                isChecked={checkedRows.includes(order.id)}
                onChangeCheck={() => handleToggleRowCheck(order.id)}
                handleChangeCheck
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...order}
              />
            ))}
          </TableBody>
          <OrderListTableFooter choosedOrdersLength={checkedRows.length} />
        </Table>
      </div>
    </FiltersContext.Provider>
  );
}

export default OrdersList;
