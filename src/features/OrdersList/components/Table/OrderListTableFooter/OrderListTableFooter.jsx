import { getCheckedOrdersIdLength } from "features/OrdersList/model/selectors";
import { React } from "react";
import { useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";
import Pagination from "./Pagination/Pagination";
import StatusSelector from "./StatusSelector/StatusSelector";

function OrderListTableFooter({ ordersLength }) {
  const numberOfCheckedOrders = useSelector(getCheckedOrdersIdLength);

  const toggleElementDeletion = (
    <Button icon="bin" theme="warning" size="short">
      Удалить
    </Button>
  );

  const toggleElementChooseStatus = (
    <Button icon="pencil" theme="primary" size="short">
      Изменить статус
    </Button>
  );

  return (
    <TableFooter className={styles._}>
      <div className={styles.block}>
        <span>Выбрано записей: {numberOfCheckedOrders}</span>

        <Dropdown
          trigger={toggleElementChooseStatus}
          childrenClassName={styles.statusSelector}
        >
          <StatusSelector />
        </Dropdown>

        <Dropdown
          trigger={toggleElementDeletion}
          childrenClassName={styles.deletionApprover}
        >
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
