import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { changeModalValue } from "features/OrdersList/model/modal/modalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import styles from "./StatusSelectorByModal.module.css";

function StatusSelectorByModal({ onDropdownClose }) {
  const statuses = Object.keys(STATUSES_NAMES_TRANSLATION);
  const modalStatus = useSelector((state) => state.modal.status);

  const dispatch = useDispatch();
  const handleChangeModalStatus = (newStatus) => {
    dispatch(changeModalValue({ valueName: "status", newValue: newStatus }));
    onDropdownClose();
  };

  return (
    <>
      {statuses.map((status) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={status}>
          <input
            type="radio"
            value={status}
            checked={modalStatus === status}
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

export default StatusSelectorByModal;
