import { React, useState } from "react";
import Button from "shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { activateAdditionalFilters } from "features/OrdersList/model/filters/filtersSlice";
import styles from "./Filter.module.css";
import MainFilter from "./MainFilter/MainFilter";
import AdditionalFilter from "./AdditionalFilter/AdditionalFilter";
import DateFilter from "./AdditionalFilter/DateFilter/DateFilter";
import SumFilter from "./AdditionalFilter/SumFilter/SumFilter";
import StatusFilter from "./AdditionalFilter/StatusFilter/StatusFilter";

function Filter() {
  const [isVisible, setIsVisible] = useState(false);

  const isAdditionalFiltersActive = useSelector(
    (state) => state.filters.isAdditionalFiltersActive
  );

  const dispatch = useDispatch();

  const handleActivateAdditionalFilters = () => {
    dispatch(activateAdditionalFilters());
  };

  const handleToggleAdditionalFilter = () => setIsVisible(!isVisible);

  return (
    <div className={styles._}>
      <MainFilter
        additionalFilterVisibility={isVisible}
        handleToggleAdditionalFilter={handleToggleAdditionalFilter}
      />
      {isVisible && (
        <AdditionalFilter>
          <DateFilter />
          <StatusFilter />
          <SumFilter />
          <Button
            theme={isAdditionalFiltersActive && "primary"}
            onClick={handleActivateAdditionalFilters}
          >
            Применить
          </Button>
        </AdditionalFilter>
      )}
    </div>
  );
}

export default Filter;
