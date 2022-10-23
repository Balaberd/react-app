import { React, useState } from "react";
import StatusFilter from "./StatusFilter/StatusFilter";

function StatusFilterContainer({ className }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [statusValues, setStatusValues] = useState({
    Новый: false,
    Рассчет: false,
    Подтвержден: false,
    Отложен: true,
    Выполнен: true,
    Отменен: false,
  });

  const handleChangeStatusValues = (el) => {
    setStatusValues({ ...statusValues, [el]: !statusValues[el] });
  };

  const handleToggleVisibility = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  let checkedValues = Object.keys(statusValues).filter(
    (el) => statusValues[el]
  );
  if (
    checkedValues.length === 0 ||
    checkedValues.length === Object.keys(statusValues).length
  ) {
    checkedValues = "Любой";
  } else {
    checkedValues = checkedValues.join(", ");
  }

  return (
    <StatusFilter
      className={className}
      dropdownVisibility={dropdownVisibility}
      handleToggleVisibility={handleToggleVisibility}
      statusValues={statusValues}
      handleChangeStatusValues={handleChangeStatusValues}
      checkedValues={checkedValues}
    />
  );
}

export default StatusFilterContainer;
