import { React, useState } from "react";
import cn from "classnames";
import styles from "./StatusFilter.module.css";
import Input from "../../../../../shared/Input/Input";
import StatusesSelector from "../../../Dropdowns/StatusesSelector/StatusesSelector";
import Button from "../../../../../shared/Button/Button";

function StatusFilter({ className, statusValues, setStatusValues }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const openDropdownHandler = () => setDropdownVisibility(!dropdownVisibility);

  let statusesForInput = Object.keys(statusValues).filter(
    (el) => statusValues[el]
  );
  if (
    statusesForInput.length === 0 ||
    statusesForInput.length === Object.keys(statusValues).length
  ) {
    statusesForInput = "Любой";
  } else {
    statusesForInput = statusesForInput.join(", ");
  }

  const componentStyles = cn(styles.filter__orderStatus, className);
  return (
    <div className={componentStyles}>
      <Input
        value={statusesForInput}
        readonly
        label="Статус заказа"
        button={
          <Button
            className={cn(styles.button, {
              [styles.flipped]: !dropdownVisibility,
            })}
            icon="arrow"
            onClick={openDropdownHandler}
          />
        }
      />
      <div>
        <div
          className={cn(styles.dropdownWrapper, {
            [styles.dropdownWrapper_unvisible]: !dropdownVisibility,
          })}
        >
          <StatusesSelector
            statusValues={statusValues}
            setStatusValues={setStatusValues}
          />
        </div>
      </div>
    </div>
  );
}

export default StatusFilter;
