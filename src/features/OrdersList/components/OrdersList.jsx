import Filter from "features/OrdersList/components/Filter/Filter";
import Header from "features/OrdersList/components/Header/Header";
import { React } from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import { useDispatch, useSelector } from "react-redux";
import OrderListTableBodyItem from "./Table/OrderListTableBodyItem/OrderListTableBodyItem";
import OrderListTableFooter from "./Table/OrderListTableFooter/OrderListTableFooter";
import OrderListTableHeader from "./Table/OrderListTableHeader/OrderListTableHeader";
import styles from "./OrdersList.module.css";
import { toggleOrderCheck } from "../model/orders/ordersSlice";
import ModalForm from "./Form/ModalForm";
import { getFilteredOrdersByPageAndAllOrdersLength } from "../model/selectors";

function OrdersList() {
  const dispatch = useDispatch();

  const handleChangeOrderCheck = (id) => {
    dispatch(toggleOrderCheck(id));
  };

  const { ordersByPage, filteredAndSortedOrdersLength } = useSelector(
    getFilteredOrdersByPageAndAllOrdersLength
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
        <OrderListTableFooter
          filteredOrdersLength={filteredAndSortedOrdersLength}
          ordersOnPageLength={ordersByPage.length}
        />
      </Table>
      <ModalForm />
    </div>
  );
}

export default OrdersList;
