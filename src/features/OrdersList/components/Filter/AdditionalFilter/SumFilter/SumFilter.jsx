// eslint-disable-next-line import/no-cycle
import { FiltersContext } from "features/OrdersList/OrdersList";
import { React, useContext } from "react";
import Input from "shared/Input/Input";
import styles from "./SumFilter.module.css";

function SumFilter() {
  const {
    filterSumFromValue,
    handleChangeFilterSumFromValue,
    handleResetFilterSumFromValue,
    filterSumToValue,
    handleChangeFilterSumToValue,
    handleResetFilterSumToValue,
  } = useContext(FiltersContext);
  return (
    <div className={styles._}>
      <Input
        value={filterSumFromValue}
        onChange={handleChangeFilterSumFromValue}
        onReset={handleResetFilterSumFromValue}
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
      />
      <Input
        value={filterSumToValue}
        onChange={handleChangeFilterSumToValue}
        onReset={handleResetFilterSumToValue}
        placeholder="&#8381;"
        prefix="до"
      />
    </div>
  );
}

export default SumFilter;
