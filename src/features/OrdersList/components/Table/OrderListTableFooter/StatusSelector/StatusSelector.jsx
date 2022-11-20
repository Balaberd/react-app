import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { changeOrders } from "features/OrdersList/model/orders/ordersSlice";
import { getCheckedOrdersID } from "features/OrdersList/model/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StatusSelector.module.css";

function StatusSelector() {
  const statuses = Object.keys(STATUSES_NAMES_TRANSLATION);

  const checkedOrders = useSelector(getCheckedOrdersID);

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleChangeOrdersStatuses = (status) => {
    dispatch(changeOrders({ newStatus: status, checkedOrders }));
  };

  return (
    <>
      {statuses.map((status) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={status}>
          <input
            type="radio"
            value={status}
            onChange={() => handleChangeOrdersStatuses(status)}
            className={styles.radio}
            id={status}
            name="radioGroup"
          />
          <div className={styles.statusName}>
            {STATUSES_NAMES_TRANSLATION[status]}
          </div>
        </label>
      ))}
    </>
  );
}

export default StatusSelector;
