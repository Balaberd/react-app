import { React, useContext } from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
// eslint-disable-next-line import/no-cycle
import { FiltersContext } from "features/OrdersList/OrdersList";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import StatusesSelector from "./StatusesSelector/StatusesSelector";
import styles from "./StatusFilter.module.css";
import dropdownStyles from "./StatusesSelector/StatusesSelector.module.css";

function StatusFilter() {
  const { filterOfStatuses, handleChangeStatusChoise } =
    useContext(FiltersContext);

  const allStatuses = Object.keys(filterOfStatuses);
  const checkedOnlyStatuses = allStatuses.filter((el) => filterOfStatuses[el]);

  const statusesValueForInput =
    checkedOnlyStatuses.length === 0 ||
    checkedOnlyStatuses.length === allStatuses.length
      ? "Любой"
      : checkedOnlyStatuses
          .map((el) => STATUSES_NAMES_TRANSLATION[el])
          .join(", ");

  const toggleElement = <Button icon="arrow" />;

  const dropdownElement = (
    <Dropdown
      trigger={toggleElement}
      childrenClassName={dropdownStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusesSelector
        statusValues={filterOfStatuses}
        handleChangeStatusValues={handleChangeStatusChoise}
      />
    </Dropdown>
  );

  return (
    <div className={styles._}>
      <Input
        value={statusesValueForInput}
        readOnly
        label="Статус заказа"
        postfix={dropdownElement}
      />
    </div>
  );
}

export default StatusFilter;
