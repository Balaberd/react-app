import {
  changeDateFrom,
  changeDateTo,
  resetDateFrom,
  resetDateTo,
} from "features/OrdersList/model/filters/filterDateSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";
import styles from "./DateFilter.module.css";

function DateFilter() {
  const { dateFrom, dateTo } = useSelector((state) => state.filterDate);

  const dispatch = useDispatch();

  const handleChangeDateFrom = ({ target: { value } }) => {
    dispatch(changeDateFrom(value));
  };
  const handleChangeDateTo = ({ target: { value } }) => {
    dispatch(changeDateTo(value));
  };
  const handleResetDateFrom = () => {
    dispatch(resetDateFrom());
  };
  const handleResetDateTo = () => {
    dispatch(resetDateTo());
  };

  return (
    <div className={styles._}>
      <Input
        value={dateFrom}
        onChange={handleChangeDateFrom}
        onReset={handleResetDateFrom}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
      />
      <Input
        value={dateTo}
        onChange={handleChangeDateTo}
        onReset={handleResetDateTo}
        placeholder="dd.mm.yyyy"
        prefix="по"
      />
    </div>
  );
}

export default DateFilter;
