import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { useSelector } from "react-redux";
import { getCheckedStatuses } from "features/OrdersList/model/selectors";
import StatusesSelector from "./StatusesSelector/StatusesSelector";
import styles from "./StatusFilter.module.css";
import dropdownStyles from "./StatusesSelector/StatusesSelector.module.css";

function StatusFilter() {
  const statuses = Object.keys(STATUSES_NAMES_TRANSLATION);
  const checkedStatuses = useSelector(getCheckedStatuses);

  const statusesForInput =
    checkedStatuses.length === 0 || checkedStatuses.length === statuses.length
      ? "Любой"
      : checkedStatuses
          .map((status) => STATUSES_NAMES_TRANSLATION[status])
          .join(", ");

  const toggleElement = <Button icon="arrow" />;

  const dropdownElement = (
    <Dropdown
      trigger={toggleElement}
      childrenClassName={dropdownStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusesSelector />
    </Dropdown>
  );

  return (
    <div className={styles._}>
      <Input
        value={statusesForInput}
        readOnly
        label="Статус заказа"
        postfix={dropdownElement}
      />
    </div>
  );
}

export default StatusFilter;
