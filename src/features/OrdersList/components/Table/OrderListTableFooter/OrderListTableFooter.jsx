import React from "react";
import { useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";

const getNumberOfCheckedOrders = (state) => state.orders.chechedOrders.length;

function OrderListTableFooter() {
  const numberOfCheckedOrders = useSelector(getNumberOfCheckedOrders);

  const toggleElement = (
    <Button icon="bin" theme="warning" size="short">
      Удалить
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <span>Выбрано записей: {numberOfCheckedOrders}</span>
      <Button icon="pencil" theme="primary" size="short">
        Изменить статус
      </Button>

      <Dropdown trigger={toggleElement} childrenClassName={styles.dropdown}>
        <DeletionApprover numberOfCheckedOrders={numberOfCheckedOrders} />
      </Dropdown>
    </TableFooter>
  );
}

export default OrderListTableFooter;
