import getPrettyDate from "features/OrdersList/lib/getPrettyDate";
import React from "react";
import Input from "shared/Input/Input";
import styles from "./DateFilter.module.css";

function DateFilter({
  minDate,
  onMinDateChange,
  maxDate,
  onMaxDateChange,
  onResetMinDate,
  onResetMaxDate,
}) {
  return (
    <div className={styles._}>
      <Input
        value={getPrettyDate(minDate.value)}
        isIncorrect={!minDate.isValid}
        onKeyDown={onMinDateChange}
        onReset={onResetMinDate}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
      />
      <Input
        value={getPrettyDate(maxDate.value)}
        isIncorrect={!maxDate.isValid}
        onKeyDown={onMaxDateChange}
        onReset={onResetMaxDate}
        placeholder="dd.mm.yyyy"
        prefix="по"
      />
    </div>
  );
}

export default DateFilter;
