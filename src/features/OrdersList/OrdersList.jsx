import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import TableFooterRow from "features/OrdersList/components/TableFooterRow/TableFooterRow";
import TableHeaderRow from "features/OrdersList/components/TableHeaderRow/TableHeaderRow";
import StatusCell from "features/OrdersList/components/TableRowItem/StatusCell/StatusCell";
import TableRowItem from "features/OrdersList/components/TableRowItem/TableRowItem";
import orders from "features/OrdersList/lib/orders";
import { React, createContext, useState } from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import TableHeader from "shared/Table/TableHeader/TableHeader";
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
  const [choosedOrders, setChoosedOrdes] = useState([]);

  const handleChangeOrderCheck = (id) => {
    if (choosedOrders.includes(id)) {
      setChoosedOrdes(choosedOrders.filter((el) => el !== id));
    } else {
      const newChoosedOrders = [...choosedOrders];
      newChoosedOrders.push(id);
      setChoosedOrdes(newChoosedOrders);
    }
  };

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
          filterDateFromValue,
          filterDateToValue,
          filterSumFromValue,
          filterSumToValue,
          handleChangeSearchbar,
          handleResetSearchbar,
          handleChangeFilterDateFromValue,
          handleResetFilterDateFromValue,
          handleChangeFilterDateToValue,
          handleResetFilterDateToValue,
          handleChangeFilterSumFromValue,
          handleResetFilterSumFromValue,
          handleChangeFilterSumToValue,
          handleResetFilterSumToValue,
          choosedStatuses,
          handleChangeStatusChoise,
          handleResetAllFilters,
          choosedOrders,
        }
      }
    >
      <div className={styles.pageWrapper}>
        <Header />
        <Filter />
        <Table>
          <TableHeader>
            <TableHeaderRow />
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRowItem
                isChoosed={choosedOrders.includes(order.id)}
                checkbox={
                  <Checkbox
                    checked={choosedOrders.includes(order.id)}
                    onChange={() => handleChangeOrderCheck(order.id)}
                  />
                }
                index={order.index}
                date={`${order.date.toLocaleDateString()}, ${order.date
                  .toLocaleTimeString()
                  .slice(0, 5)}`}
                status={<StatusCell status={order.status} />}
                numberOfPositions={
                  order.status === "canceled" ? "-" : order.amountPositions
                }
                sum={order.status === "canceled" ? "-" : order.sum}
                name={
                  order.status === "canceled"
                    ? order.lastName
                    : `${order.lastName} ${order.firstName} ${order.secondName}`
                }
              />
            ))}
          </TableBody>
          <TableFooter>
            <TableFooterRow />
          </TableFooter>
        </Table>
      </div>
    </FiltersContext.Provider>
  );
}

export default OrdersList;
