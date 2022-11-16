import {
  changeMinSum,
  changeMaxSum,
} from "features/OrdersList/model/filters/filtersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";
import styles from "./SumFilter.module.css";

function SumFilter() {
  const { minSum, maxSum } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChangeMinSum = ({ target: { value } }) => {
    dispatch(changeMinSum(value));
  };
  const handleChangeMaxSum = ({ target: { value } }) => {
    dispatch(changeMaxSum(value));
  };
  const handleResetMinSum = () => {
    dispatch(changeMinSum(""));
  };
  const handleResetMaxSum = () => {
    dispatch(changeMaxSum(""));
  };

  return (
    <div className={styles._}>
      <Input
        value={minSum}
        onChange={handleChangeMinSum}
        onReset={handleResetMinSum}
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
      />
      <Input
        value={maxSum}
        onChange={handleChangeMaxSum}
        onReset={handleResetMaxSum}
        placeholder="&#8381;"
        prefix="до"
      />
    </div>
  );
}

export default SumFilter;
