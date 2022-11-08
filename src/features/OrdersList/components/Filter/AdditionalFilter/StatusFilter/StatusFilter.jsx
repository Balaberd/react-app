import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "features/OrdersList/model/filters/filtersSlice";
import StatusesSelector from "./StatusesSelector/StatusesSelector";
import styles from "./StatusFilter.module.css";
import dropdownStyles from "./StatusesSelector/StatusesSelector.module.css";

function StatusFilter() {
  const filterOfStatuses = useSelector((state) => state.filters.statuses);

  const dispatch = useDispatch();

  const handleChangeStatusChoise = (status) => {
    dispatch(toggleStatus(status));
  };

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
