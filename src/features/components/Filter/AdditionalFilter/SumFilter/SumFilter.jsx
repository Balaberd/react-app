import React from "react";
import cn from "classnames";
import styles from "./SumFilter.module.css";
import Input from "../../../../../shared/Input/Input";

function SumFilter({
  className,
  sumFromValue,
  sumToValue,
  changeSumFromValue,
  resetSumFromValue,
  changeSumToValue,
  resetSumToValue,
}) {
  const componentStyles = cn(styles.filter__orderSum, className);
  return (
    <div className={componentStyles}>
      <Input
        label="Сумма заказа"
        placeholder="&#8381;"
        contentBefore="от"
        value={sumFromValue}
        onChange={changeSumFromValue}
        resetValue={resetSumFromValue}
      />
      <Input
        placeholder="&#8381;"
        contentBefore="до"
        value={sumToValue}
        onChange={changeSumToValue}
        resetValue={resetSumToValue}
      />
    </div>
  );
}

export default SumFilter;
