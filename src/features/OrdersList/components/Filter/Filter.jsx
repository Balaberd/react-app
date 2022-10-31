import { React, useState } from "react";
import cn from "classnames";
import Button from "shared/Button/Button";
import styles from "./Filter.module.css";
import MainFilter from "./MainFilter/MainFilter";
import AdditionalFilter from "./AdditionalFilter/AdditionalFilter";
import DateFilter from "./AdditionalFilter/DateFilter/DateFilter";
import SumFilter from "./AdditionalFilter/SumFilter/SumFilter";
import StatusFilterContainer from "./AdditionalFilter/StatusFilterContainer/StatusFilterContainer";

function Filter({ className }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleAdditionalFilter = () => setIsVisible(!isVisible);

  const componentStyles = cn(styles._, className);

  return (
    <div className={componentStyles}>
      <MainFilter
        additionalFilterVisibility={isVisible}
        handleToggleAdditionalFilter={handleToggleAdditionalFilter}
      />
      {isVisible && (
        <AdditionalFilter>
          <DateFilter />
          <StatusFilterContainer />
          <SumFilter />
          <Button>Применить</Button>
        </AdditionalFilter>
      )}
    </div>
  );
}

export default Filter;
