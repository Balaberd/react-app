import { getCheckedOrdersIDLength } from "features/OrdersList/model/selectors";
import { React } from "react";
import { useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import cn from "classnames";
import DeletionApprover from "./DeletionApprover/DeletionApprover";
import styles from "./OrderListTableFooter.module.css";
import Pagination from "./Pagination/Pagination";
import StatusSelector from "./StatusSelector/StatusSelector";

function OrderListTableFooter({ ordersLength }) {
  const numberOfCheckedOrders = useSelector(getCheckedOrdersIDLength);

  return (
    <TableFooter className={styles._}>
      <div
        className={cn(styles.block, {
          [styles.unvisible]: numberOfCheckedOrders === 0,
        })}
      >
        <span>Выбрано записей: {numberOfCheckedOrders}</span>

        <Dropdown
          trigger={
            <Button icon="pencil" theme="primary" size="short">
              Изменить статус
            </Button>
          }
          childrenClassName={styles.statusSelector}
        >
          <StatusSelector />
        </Dropdown>

        <Dropdown
          trigger={
            <Button icon="bin" theme="warning" size="short">
              Удалить
            </Button>
          }
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
