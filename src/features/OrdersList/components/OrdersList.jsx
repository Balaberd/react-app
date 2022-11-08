import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React, useEffect } from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import { useDispatch, useSelector } from "react-redux";
import OrderListTableBodyItem from "./Table/OrderListTableBodyItem/OrderListTableBodyItem";
import OrderListTableFooter from "./Table/OrderListTableFooter/OrderListTableFooter";
import OrderListTableHeader from "./Table/OrderListTableHeader/OrderListTableHeader";
import ordersMock from "../lib/orders";
import styles from "./OrdersList.module.css";
import {
  addOrderSelection,
  deleteOrderSelection,
  getOrders,
} from "../model/orders/ordersSlice";
import getSortedOrders from "../lib/getSortedOrders";

const getOrder = (state) => state.orders.allOrders;
const getCheckedOrders = (state) => state.orders.chechedOrders;

const getFullName = (obj) =>
  `${obj.lastName} ${obj.firstName} ${obj.secondName}`;

function OrdersList() {
  const dispatch = useDispatch();

  const orders = useSelector(getOrder);
  const checkedOrders = useSelector(getCheckedOrders);

  const handleToggleOrderCheck = (id) => {
    if (checkedOrders.includes(id)) {
      dispatch(deleteOrderSelection(id));
    } else {
      dispatch(addOrderSelection(id));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrders(ordersMock));
    }, 500);
  }, []);

  const searchbarValue = useSelector((state) => state.searchbar);

  const filtredOrders = searchbarValue
    ? orders.filter(
        (order) =>
          getFullName(order).includes(searchbarValue) ||
          String(order.index).includes(searchbarValue)
      )
    : orders;

  const { activeSorter, isIncreaseDirection } = useSelector(
    (state) => state.sorter
  );

  const filtredAndSortedOrders = getSortedOrders(
    filtredOrders,
    activeSorter,
    isIncreaseDirection
  );

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Filter />
      <Table>
        <OrderListTableHeader />
        <TableBody>
          {filtredAndSortedOrders.map((order) => (
            <OrderListTableBodyItem
              key={order.id}
              isChecked={checkedOrders.includes(order.id)}
              onChangeCheck={() => handleToggleOrderCheck(order.id)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...order}
            />
          ))}
        </TableBody>
        <OrderListTableFooter />
      </Table>
    </div>
  );
}

export default OrdersList;
