import React from "react";
import Input from "shared/Input/Input";
import styles from "./SumFilter.module.css";

function SumFilter({
  minSum,
  onMinSumChange,
  maxSum,
  onMaxSumChange,
  onResetMinSum,
  onResetMaxSum,
}) {
  return (
    <div className={styles._}>
      <Input
        value={minSum}
        onChange={onMinSumChange}
        onReset={onResetMinSum}
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
      />
      <Input
        value={maxSum}
        onChange={onMaxSumChange}
        onReset={onResetMaxSum}
        placeholder="&#8381;"
        prefix="до"
      />
    </div>
  );
}

export default SumFilter;
