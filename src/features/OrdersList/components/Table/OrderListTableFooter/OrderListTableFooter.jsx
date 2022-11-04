import React from "react";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";

function OrderListTableFooter({ choosedOrdersLength }) {
  const toggleElement = (
    <Button icon="bin" theme="warning" heightSize="short">
      Удалить
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <span>Выбрано записей: {choosedOrdersLength}</span>
      <Button icon="pencil" theme="primary" heightSize="short">
        Изменить статус
      </Button>

      <Dropdown trigger={toggleElement} childrenClassName={styles.dropdown}>
        <DeletionApprover />
      </Dropdown>
    </TableFooter>
  );
}

export default OrderListTableFooter;
