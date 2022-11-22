import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import StatusesSelector from "./StatusesSelector/StatusesSelector";
import styles from "./StatusFilter.module.css";
import dropdownStyles from "./StatusesSelector/StatusesSelector.module.css";

function StatusFilter({ choosedStatuses, onChangeChoosedStatus }) {
  const statuses = Object.keys(STATUSES_NAMES_TRANSLATION);

  const statusesForInput =
    choosedStatuses.length === 0 || choosedStatuses.length === statuses.length
      ? "Любой"
      : choosedStatuses
          .map((status) => STATUSES_NAMES_TRANSLATION[status])
          .join(", ");

  const dropdownElement = (
    <Dropdown
      trigger={<Button icon="arrow" />}
      childrenClassName={dropdownStyles._}
      triggerActiveClassName={styles.flipped}
    >
      <StatusesSelector
        choosedStatuses={choosedStatuses}
        onChangeChoosedStatus={onChangeChoosedStatus}
      />
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
