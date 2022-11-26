import { changeModalValue } from "features/OrdersList/model/orderForm/orderFormSlice";
import React from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { STATUSES_NAMES_TRANSLATION } from "features/OrdersList/const";
import styles from "./StatusSelectorByForm.module.css";

function StatusSelectorByForm({ orderStatus }) {
  const statuses = Object.keys(STATUSES_NAMES_TRANSLATION);

  const dispatch = useDispatch();
  const handleChangeModalStatus = (newStatus) => {
    dispatch(changeModalValue({ valueName: "status", newValue: newStatus }));
  };

  return (
    <>
      {statuses.map((status) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={status}>
          <input
            type="radio"
            value={status}
            checked={orderStatus === status}
            onChange={() => handleChangeModalStatus(status)}
            className={cn(styles.radio, "dropdownCloser")}
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

export default StatusSelectorByForm;
