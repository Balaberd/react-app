import { FiltersContext } from "features/OrdersList/OrdersList";
import React, { useContext } from "react";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./TableFooterRow.module.css";

function TableFooterRow() {
  const { choosedOrders } = useContext(FiltersContext);
  const triggerElement = (
    <Button theme="warning" height="short" icon="bin">
      Удалить
    </Button>
  );
  return (
    <div className={styles._}>
      <div className={styles.checkedOrederCounter}>
        Выбрано записей: {choosedOrders.length}
      </div>
      <Button theme="primary" height="short" icon="pencil">
        Изменить статус
      </Button>
      <Dropdown trigger={triggerElement} childrenClassName={styles.dropdown}>
        <DeletionApprover />
      </Dropdown>
    </div>
  );
}

export default TableFooterRow;
