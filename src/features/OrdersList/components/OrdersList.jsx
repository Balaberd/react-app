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
import { getOrders } from "../model/orders/ordersSlice";
import {
  getCheckedOrdersId,
  getFiltredOrdersByPageAndAllOrdersLength,
} from "../model/selectors";
import { setOrderCheck } from "../model/filters/filtersSlice";

function OrdersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrders(ordersMock));
    }, 500);
  }, []);

  const checkedOrders = useSelector(getCheckedOrdersId);
  const handleChangeOrderCheck = (id) => {
    dispatch(setOrderCheck(id));
  };

  const [filtredOrders, ordersLength] = useSelector(
    getFiltredOrdersByPageAndAllOrdersLength
  );

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Filter />
      <Table>
        <OrderListTableHeader allOrdersOnPage={filtredOrders} />
        <TableBody>
          {filtredOrders.map((order) => (
            <OrderListTableBodyItem
              key={order.id}
              isChecked={checkedOrders.includes(order.id)}
              onChangeCheck={() => handleChangeOrderCheck(order.id)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...order}
            />
          ))}
        </TableBody>
        <OrderListTableFooter ordersLength={ordersLength} />
      </Table>
    </div>
  );
}

export default OrdersList;
