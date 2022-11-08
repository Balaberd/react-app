import { React, useState } from "react";
import Button from "shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFiltersActivation } from "features/OrdersList/model/filters/filtersSlice";
import styles from "./Filter.module.css";
import MainFilter from "./MainFilter/MainFilter";
import AdditionalFilter from "./AdditionalFilter/AdditionalFilter";
import DateFilter from "./AdditionalFilter/DateFilter/DateFilter";
import SumFilter from "./AdditionalFilter/SumFilter/SumFilter";
import StatusFilter from "./AdditionalFilter/StatusFilter/StatusFilter";

function Filter() {
  const [isVisible, setIsVisible] = useState(false);
  const isFIltersActive = useSelector((state) => state.filters.isFiltersActive);
  const dispatch = useDispatch();

  const handleToggleActiveFilters = () => {
    dispatch(toggleFiltersActivation());
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
            theme={isFIltersActive && "primary"}
            onClick={handleToggleActiveFilters}
          >
            Применить
          </Button>
        </AdditionalFilter>
      )}
    </div>
  );
}

export default Filter;
