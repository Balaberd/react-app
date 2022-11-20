import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React, useEffect } from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import { useDispatch, useSelector } from "react-redux";
import OrderListTableBodyItem from "./Table/OrderListTableBodyItem/OrderListTableBodyItem";
import OrderListTableFooter from "./Table/OrderListTableFooter/OrderListTableFooter";
import OrderListTableHeader from "./Table/OrderListTableHeader/OrderListTableHeader";
import ordersMock from "../lib/ordersMock";
import styles from "./OrdersList.module.css";
import { getOrders, toggleOrderCheck } from "../model/orders/ordersSlice";
import { getFiltredOrdersByPageAndAllOrdersLength } from "../model/selectors";
import ModalForm from "./Form/ModalForm";

function OrdersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrders(ordersMock));
    }, 500);
  }, []);

  const handleChangeOrderCheck = (id) => {
    dispatch(toggleOrderCheck(id));
  };

  const { ordersByPage, filtredAndSortedOrdersLength } = useSelector(
    getFiltredOrdersByPageAndAllOrdersLength
  );

  return (
    <div className={styles._}>
      <Header />
      <Filter />
      <Table>
        <OrderListTableHeader allOrdersOnPage={ordersByPage} />
        <TableBody>
          {ordersByPage.map((order) => (
            <OrderListTableBodyItem
              key={order.id}
              onChangeCheck={() => handleChangeOrderCheck(order.id)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...order}
            />
          ))}
        </TableBody>
        <OrderListTableFooter ordersLength={filtredAndSortedOrdersLength} />
      </Table>
      <ModalForm />
    </div>
  );
}

export default OrdersList;
