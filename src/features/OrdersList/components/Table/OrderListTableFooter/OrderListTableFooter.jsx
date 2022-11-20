import { getCheckedOrdersIDLength } from "features/OrdersList/model/selectors";
import { React, useState } from "react";
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

  const [isSelectorDropdownVisible, setIsSelectorDropdownVisible] =
    useState(false);
  const toggleSelectorDropdownVisibility = () => {
    setIsSelectorDropdownVisible(!isSelectorDropdownVisible);
  };

  const [isApproverDropdownVisible, setIsApproverDropdownVisible] =
    useState(false);
  const toggleApproverDropdownVisibility = () => {
    setIsApproverDropdownVisible(!isApproverDropdownVisible);
  };

  return (
    <TableFooter className={styles._}>
      <div
        className={cn(styles.block, {
          [styles.unvisible]: numberOfCheckedOrders === 0,
        })}
      >
        <span>Выбрано записей: {numberOfCheckedOrders}</span>

        <Dropdown
          externalVisibilityValue={isSelectorDropdownVisible}
          externalVisibilitySetter={toggleSelectorDropdownVisibility}
          trigger={toggleElementChooseStatus}
          childrenClassName={styles.statusSelector}
        >
          <StatusSelector onDropdownClose={toggleSelectorDropdownVisibility} />
        </Dropdown>

        <Dropdown
          externalVisibilityValue={isApproverDropdownVisible}
          externalVisibilitySetter={toggleApproverDropdownVisibility}
          trigger={toggleElementDeletion}
          childrenClassName={styles.deletionApprover}
        >
          <DeletionApprover
            onDropdownClose={toggleApproverDropdownVisibility}
            numberOfCheckedOrders={numberOfCheckedOrders}
          />
        </Dropdown>
      </div>

      <div className={styles.block}>
        <Pagination ordersLength={ordersLength} />
      </div>
    </TableFooter>
  );
}

export default OrderListTableFooter;
