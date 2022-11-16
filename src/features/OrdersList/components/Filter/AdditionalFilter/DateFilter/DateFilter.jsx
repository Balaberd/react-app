import {
  changeMinDate,
  changeMaxDate,
} from "features/OrdersList/model/filters/filtersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";
import styles from "./DateFilter.module.css";

function DateFilter() {
  const { minDate, maxDate } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChangeMinDate = ({ target: { value } }) => {
    dispatch(changeMinDate(value));
  };
  const handleChangeMaxDate = ({ target: { value } }) => {
    dispatch(changeMaxDate(value));
  };
  const handleResetMinDate = () => {
    dispatch(changeMinDate(""));
  };
  const handleResetMaxDate = () => {
    dispatch(changeMaxDate(""));
  };

  return (
    <div className={styles._}>
      <Input
        value={minDate}
        onChange={handleChangeMinDate}
        onReset={handleResetMinDate}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
      />
      <Input
        value={maxDate}
        onChange={handleChangeMaxDate}
        onReset={handleResetMaxDate}
        placeholder="dd.mm.yyyy"
        prefix="по"
      />
    </div>
  );
}

export default DateFilter;
