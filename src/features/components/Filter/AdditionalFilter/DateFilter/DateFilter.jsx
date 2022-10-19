import React from "react";
import cn from "classnames";
import styles from "./DateFilter.module.css";
import Input from "../../../../../shared/Input/Input";

function DateFilter({
  className,
  dateFromValue,
  changeDateFromValue,
  resetDateFromValue,
  dateToValue,
  changeDateToValue,
  resetDateToValue,
}) {
  const componentStyles = cn(styles.filter__orderDate, className);
  return (
    <div className={componentStyles}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        contentBefore="c"
        value={dateFromValue}
        onChange={changeDateFromValue}
        resetValue={resetDateFromValue}
      />
      <Input
        placeholder="dd.mm.yyyy"
        contentBefore="по"
        value={dateToValue}
        onChange={changeDateToValue}
        resetValue={resetDateToValue}
      />
    </div>
  );
}

export default DateFilter;
