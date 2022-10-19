import React, { useState } from "react";
import AdditionalFilter from "./features/components/Filter/AdditionalFilter/AdditionalFilter";
import DateFilter from "./features/components/Filter/AdditionalFilter/DateFilter/DateFilter";
import StatusFilter from "./features/components/Filter/AdditionalFilter/StatusFilter/StatusFilter";
import SumFilter from "./features/components/Filter/AdditionalFilter/SumFilter/SumFilter";
import Filter from "./features/components/Filter/Filter";
import Header from "./features/components/Header/Header";
import Table from "./features/components/Table/Table";
import Button from "./shared/Button/Button";

const initialStatusValues = {
  Новый: false,
  Расчет: false,
  Подтвержден: false,
  Отложен: false,
  Выполнен: false,
  Отменен: false,
};

function App() {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const [searchbarValue, setSearchbarValue] = useState("");
  const [dateFromValue, setDateFromValue] = useState("");
  const [dateToValue, setDateToValue] = useState("");
  const [sumFromValue, setSumFromValue] = useState("");
  const [sumToValue, setSumToValue] = useState("");
  const [statusValues, setStatusValues] = useState(initialStatusValues);
  const changeFilterVisibility = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);
  const getFilterValueChangers = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(""),
  ];
  const [changeSeachbarValue, resetSeachbarValue] =
    getFilterValueChangers(setSearchbarValue);
  const [changeDateFromValue, resetDateFromValue] =
    getFilterValueChangers(setDateFromValue);
  const [changeDateToValue, resetDateToValue] =
    getFilterValueChangers(setDateToValue);
  const [changeSumFromValue, resetSumFromValue] =
    getFilterValueChangers(setSumFromValue);
  const [changeSumToValue, resetSumToValue] =
    getFilterValueChangers(setSumToValue);
  const resetAllFilters = () => {
    setSearchbarValue("");
    setDateFromValue("");
    setDateToValue("");
    setSumFromValue("");
    setSumToValue("");
    setStatusValues(initialStatusValues);
  };
  return (
    <div className="pageWrapper">
      <Header />
      <Filter
        searchbarValue={searchbarValue}
        changeSeachbarValue={changeSeachbarValue}
        resetSeachbarValue={resetSeachbarValue}
        additionalFilterVisibility={additionalFilterVisibility}
        changeFilterVisibility={changeFilterVisibility}
        resetAllFilters={resetAllFilters}
      >
        {additionalFilterVisibility && (
          <AdditionalFilter>
            <DateFilter
              dateFromValue={dateFromValue}
              changeDateFromValue={changeDateFromValue}
              resetDateFromValue={resetDateFromValue}
              dateToValue={dateToValue}
              changeDateToValue={changeDateToValue}
              resetDateToValue={resetDateToValue}
            />
            <StatusFilter
              statusValues={statusValues}
              setStatusValues={setStatusValues}
            />
            <SumFilter
              sumFromValue={sumFromValue}
              changeSumFromValue={changeSumFromValue}
              resetSumFromValue={resetSumFromValue}
              sumToValue={sumToValue}
              changeSumToValue={changeSumToValue}
              resetSumToValue={resetSumToValue}
            />
            <Button>Применить</Button>
          </AdditionalFilter>
        )}
      </Filter>
      <Table
        additionalFilterVisibility={additionalFilterVisibility}
        statusValues={statusValues}
      />
    </div>
  );
}

export default App;
