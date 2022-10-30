// eslint-disable-next-line import/no-cycle
import { FiltersContext } from "features/OrdersList/OrdersList";
import { React, useContext } from "react";
import Input from "shared/Input/Input";
import styles from "./DateFilter.module.css";

function DateFilter() {
  const {
    filterDateFromValue,
    handleChangeFilterDateFromValue,
    handleResetFilterDateFromValue,
    filterDateToValue,
    handleChangeFilterDateToValue,
    handleResetFilterDateToValue,
  } = useContext(FiltersContext);

  return (
    <div className={styles._}>
      <Input
        value={filterDateFromValue}
        onChange={handleChangeFilterDateFromValue}
        resetValue={handleResetFilterDateFromValue}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
      />
      <Input
        value={filterDateToValue}
        onChange={handleChangeFilterDateToValue}
        resetValue={handleResetFilterDateToValue}
        placeholder="dd.mm.yyyy"
        prefix="по"
      />
    </div>
  );
}

export default DateFilter;
