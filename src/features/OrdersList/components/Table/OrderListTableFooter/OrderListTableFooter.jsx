import React from "react";
import { useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";
import Pagination from "./Pagination/Pagination";

const getNumberOfCheckedOrders = (state) => state.orders.checkedOrders.length;

function OrderListTableFooter({ ordersLength }) {
  const numberOfCheckedOrders = useSelector(getNumberOfCheckedOrders);

  const toggleElement = (
    <Button icon="bin" theme="warning" size="short">
      Удалить
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <div className={styles.block}>
        <span>Выбрано записей: {numberOfCheckedOrders}</span>
        <Button icon="pencil" theme="primary" size="short">
          Изменить статус
        </Button>

        <Dropdown trigger={toggleElement} childrenClassName={styles.dropdown}>
          <DeletionApprover numberOfCheckedOrders={numberOfCheckedOrders} />
        </Dropdown>
      </div>

      <div className={styles.block}>
        <Pagination ordersLength={ordersLength} />
      </div>
    </TableFooter>
  );
}

export default OrderListTableFooter;
