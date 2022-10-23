import React from "react";
import cn from "classnames";
import Input from "shared/Input/Input";
import StatusesSelector from "features/components/Dropdowns/StatusesSelector/StatusesSelector";
import Button from "shared/Button/Button";
import styles from "./StatusFilter.module.css";

function StatusFilter({
  className,
  dropdownVisibility,
  handleToggleVisibility,
  handleChangeStatusValues,
  statusValues,
  checkedValues,
}) {
  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <Input
        value={checkedValues}
        readOnly
        label="Статус заказа"
        postfix={
          <Button
            className={cn(styles.button, {
              [styles.flipped]: !dropdownVisibility,
            })}
            icon="arrow"
            onClick={handleToggleVisibility}
          />
        }
      />
      <div>
        {dropdownVisibility && (
          <div className={styles.dropdownWrapper}>
            <StatusesSelector
              statusValues={statusValues}
              handleChangeStatusValues={handleChangeStatusValues}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusFilter;
