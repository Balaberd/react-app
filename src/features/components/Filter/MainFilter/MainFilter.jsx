import { React } from "react";
import cn from "classnames";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Icon from "shared/Icon/Icon";
import styles from "./MainFilter.module.css";

function MainFilter({
  additionalFilterVisibility,
  handleToggleAdditionalFilter,
  className,
}) {
  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <div className={styles.leftBlock}>
        <div className={styles.searchbarWrapper}>
          <Input
            placeholder="Номер заказа или ФИО"
            prefix={<Icon type="search" />}
          />
        </div>
        <Button
          icon="filter"
          onClick={handleToggleAdditionalFilter}
          isFilled={additionalFilterVisibility}
        >
          Фильтры
        </Button>
        <Button>Сбросить фильтры</Button>
      </div>
      <div>
        <Button icon="refresh">Загрузка</Button>
      </div>
    </div>
  );
}

export default MainFilter;
