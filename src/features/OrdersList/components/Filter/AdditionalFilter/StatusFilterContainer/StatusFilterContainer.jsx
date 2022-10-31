// eslint-disable-next-line import/no-cycle
import { FiltersContext } from "features/OrdersList/OrdersList";
import { React, useContext } from "react";
import StatusFilter from "./StatusFilter/StatusFilter";

const NAMES_OF_STATUSES = {
  new: "Новый",
  calculating: "Расчет",
  confirm: "Подтвержден",
  postponed: "Отложен",
  done: "Выполнен",
  canceled: "Отменен",
};

function StatusFilterContainer() {
  const { choosedStatuses, handleChangeStatusChoise } =
    useContext(FiltersContext);

  let checkedValues = Object.keys(choosedStatuses)
    .filter((el) => choosedStatuses[el])
    .map((el) => NAMES_OF_STATUSES[el]);
  if (
    checkedValues.length === 0 ||
    checkedValues.length === Object.keys(choosedStatuses).length
  ) {
    checkedValues = "Любой";
  } else {
    checkedValues = checkedValues.join(", ");
  }

  return (
    <StatusFilter
      statusValues={choosedStatuses}
      handleChangeStatusValues={handleChangeStatusChoise}
      checkedValues={checkedValues}
    />
  );
}

export default StatusFilterContainer;
