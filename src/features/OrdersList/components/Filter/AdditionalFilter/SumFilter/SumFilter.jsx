import {
  changeSumFrom,
  changeSumTo,
  resetSumFrom,
  resetSumTo,
} from "features/OrdersList/model/filters/filterSumSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";
import styles from "./SumFilter.module.css";

function SumFilter() {
  const { sumFrom, sumTo } = useSelector((state) => state.filterSum);

  const dispatch = useDispatch();

  const handleChangeSumFrom = ({ target: { value } }) => {
    dispatch(changeSumFrom(value));
  };
  const handleChangeSumTo = ({ target: { value } }) => {
    dispatch(changeSumTo(value));
  };
  const handleResetSumFrom = () => {
    dispatch(resetSumFrom());
  };
  const handleResetSumTo = () => {
    dispatch(resetSumTo());
  };

  return (
    <div className={styles._}>
      <Input
        value={sumFrom}
        onChange={handleChangeSumFrom}
        onReset={handleResetSumFrom}
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
      />
      <Input
        value={sumTo}
        onChange={handleChangeSumTo}
        onReset={handleResetSumTo}
        placeholder="&#8381;"
        prefix="до"
      />
    </div>
  );
}

export default SumFilter;
