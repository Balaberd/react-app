import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { toggleStatusCheck } from "features/OrdersList/model/filters/filtersSlice";
import { getCheckedStatuses } from "features/OrdersList/model/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

const STATUSES = [
  "new",
  "calculating",
  "confirm",
  "postponed",
  "done",
  "canceled",
];

function StatusesSelector() {
  const checkedStatuses = useSelector(getCheckedStatuses);

  const dispatch = useDispatch();

  const handleChangeStatusCheck = (status) => {
    dispatch(toggleStatusCheck(status));
  };

  return (
    <>
      {STATUSES.map((status) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={status}>
          <Checkbox
            checked={checkedStatuses.includes(status)}
            onChange={() => handleChangeStatusCheck(status)}
          />
          {STATUSES_NAMES_TRANSLATION[status]}
        </label>
      ))}
    </>
  );
}

export default StatusesSelector;
