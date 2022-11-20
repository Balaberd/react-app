import { React, useState } from "react";
import Button from "shared/Button/Button";
import { useDispatch } from "react-redux";
import { getAdditionalFilterValues } from "features/OrdersList/model/filters/filtersSlice";
import { getDateByFilters } from "features/OrdersList/lib/date";
import { resetCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import styles from "./Filter.module.css";
import MainFilter from "./MainFilter/MainFilter";
import AdditionalFilter from "./AdditionalFilter/AdditionalFilter";
import DateFilter from "./AdditionalFilter/DateFilter/DateFilter";
import SumFilter from "./AdditionalFilter/SumFilter/SumFilter";
import StatusFilter from "./AdditionalFilter/StatusFilter/StatusFilter";

const ALLOWED_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const createHandleChange = (state, setter) => (event) => {
  if (event.key === "Backspace") {
    const newValue = state.value.slice(0, state.value.length - 1);
    setter({ ...state, value: newValue });
  }
  if (state.value.length === 8) return;
  if (ALLOWED_VALUES.includes(event.key))
    setter({ ...state, value: state.value + event.key });
};

function Filter() {
  const [isVisible, setIsVisible] = useState(false);
  const [minDate, setMinDate] = useState({ value: "", isValid: true });
  const [maxDate, setMaxDate] = useState({ value: "", isValid: true });
  const [choosedStatuses, setChoosedStatuses] = useState([]);
  const [minSum, setMinSum] = useState("");
  const [maxSum, setMaxSum] = useState("");

  const handleToggleAdditionalFilter = () => setIsVisible(!isVisible);
  const handleChangeMinDate = createHandleChange(minDate, setMinDate);
  const handleChangeMaxDate = createHandleChange(maxDate, setMaxDate);

  const handleChangeChoosedStatuses = (status) => {
    if (choosedStatuses.includes(status)) {
      setChoosedStatuses(
        choosedStatuses.filter((currentStatus) => currentStatus !== status)
      );
    } else {
      setChoosedStatuses([...choosedStatuses, status]);
    }
  };
  const handleChangeMinSum = ({ target: { value } }) => {
    if (Number.isInteger(Number(value)) && value[0] !== "0")
      setMinSum(value.trim());
  };
  const handleChangeMaxSum = ({ target: { value } }) => {
    if (Number.isInteger(Number(value)) && value[0] !== "0")
      setMaxSum(value.trim());
  };
  const createHandleResetFilter = (filterSetter) => () => {
    if (filterSetter === setMinDate || filterSetter === setMaxDate) {
      return filterSetter({ value: "", isValid: true });
    }
    return filterSetter("");
  };
  const handleResetAdditionalFilters = () => {
    setMinDate({ value: "", isValid: true });
    setMaxDate({ value: "", isValid: true });
    setChoosedStatuses([]);
    setMinSum("");
    setMaxSum("");
  };

  const dispatch = useDispatch();
  const applyAdditionalFilter = () => {
    const formatedMinDate = getDateByFilters(minDate.value);
    const formatedMaxDate = getDateByFilters(maxDate.value, true);

    const isMinDateValid = minDate.value
      ? !(formatedMinDate === "Invalid Date")
      : true;
    const isMaxDateValid = maxDate.value
      ? !(formatedMaxDate === "Invalid Date")
      : true;

    if (!isMinDateValid || !isMaxDateValid) {
      if (!isMinDateValid) setMinDate({ ...minDate, isValid: false });
      if (!isMaxDateValid) setMaxDate({ ...maxDate, isValid: false });
      return;
    }
    if (new Date(formatedMinDate) > new Date(formatedMaxDate)) {
      setMinDate({ ...minDate, isValid: false });
      setMaxDate({ ...maxDate, isValid: false });
      return;
    }
    setMinDate({ ...minDate, isValid: true });
    setMaxDate({ ...maxDate, isValid: true });

    dispatch(resetCheckedOrders());
    dispatch(
      getAdditionalFilterValues({
        minDate: formatedMinDate,
        maxDate: formatedMaxDate,
        choosedStatuses,
        minSum,
        maxSum,
      })
    );
  };

  return (
    <div className={styles._}>
      <MainFilter
        additionalFilterVisibility={isVisible}
        handleToggleAdditionalFilter={handleToggleAdditionalFilter}
        onResetAdditionalFilters={handleResetAdditionalFilters}
      />
      {isVisible && (
        <AdditionalFilter>
          <DateFilter
            minDate={minDate}
            onMinDateChange={handleChangeMinDate}
            maxDate={maxDate}
            onMaxDateChange={handleChangeMaxDate}
            onResetMinDate={createHandleResetFilter(setMinDate)}
            onResetMaxDate={createHandleResetFilter(setMaxDate)}
          />
          <StatusFilter
            choosedStatuses={choosedStatuses}
            onChangeChoosedStatus={handleChangeChoosedStatuses}
          />
          <SumFilter
            minSum={minSum}
            onMinSumChange={handleChangeMinSum}
            maxSum={maxSum}
            onMaxSumChange={handleChangeMaxSum}
            onResetMinSum={createHandleResetFilter(setMinSum)}
            onResetMaxSum={createHandleResetFilter(setMaxSum)}
          />
          <Button onClick={applyAdditionalFilter}>Применить</Button>
        </AdditionalFilter>
      )}
    </div>
  );
}

export default Filter;
