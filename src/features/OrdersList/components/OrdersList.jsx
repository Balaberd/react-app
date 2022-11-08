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
import getfiltredOrders from "../lib/getFiltredOrders";
import getSortedOrders from "../lib/getSortedOrders";
import getFiltredOrdersForPage from "../lib/getFiltredOrdersForPage";

function OrdersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrders(ordersMock));
    }, 500);
  }, []);

  const { currentPage, pageLimit, checkedOrders, allOrders } = useSelector(
    (state) => state.orders
  );
  const { activeSorter, isIncreaseDirection } = useSelector(
    (state) => state.sorter
  );

  const handleToggleOrderCheck = (id) => {
    if (checkedOrders.includes(id)) {
      dispatch(deleteOrderSelection(id));
    } else {
      dispatch(addOrderSelection(id));
    }
  };

  const filtredOrders = getfiltredOrders(allOrders);

  const filtredAndSortedOrders = getSortedOrders(
    filtredOrders,
    activeSorter,
    isIncreaseDirection
  );

  const ordersForPage = getFiltredOrdersForPage(
    filtredAndSortedOrders,
    pageLimit,
    currentPage
  );

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Filter />
      <Table>
        <OrderListTableHeader />
        <TableBody>
          {ordersForPage.map((order) => (
            <OrderListTableBodyItem
              key={order.id}
              isChecked={checkedOrders.includes(order.id)}
              onChangeCheck={() => handleToggleOrderCheck(order.id)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...order}
            />
          ))}
        </TableBody>
        <OrderListTableFooter ordersLength={filtredAndSortedOrders.length} />
      </Table>
    </div>
  );
}

export default OrdersList;
