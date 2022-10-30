import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import StatusesSelector from "./StatusesSelector/StatusesSelector";
import styles from "./StatusFilter.module.css";
import dropdownStyles from "./StatusesSelector/StatusesSelector.module.css";

function StatusFilter({
  handleChangeStatusValues,
  statusValues,
  checkedValues,
}) {
  const toggleElement = <Button icon="arrow" />;

  const dropdownElement = (
    <Dropdown
      trigger={toggleElement}
      childrenClassName={dropdownStyles._}
      triggerClassNameWithActivTrigger={styles.flipped}
    >
      <StatusesSelector
        statusValues={statusValues}
        handleChangeStatusValues={handleChangeStatusValues}
      />
    </Dropdown>
  );

  return (
    <div className={styles._}>
      <Input
        value={checkedValues}
        readOnly
        label="Статус заказа"
        postfix={dropdownElement}
      />
    </div>
  );
}

export default StatusFilter;
