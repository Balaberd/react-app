/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styles from "./TableHeader.module.css";
import Checkbox from "../../../../shared/Chechbox/Checkbox";
import Icon from "../../../../shared/Icon/Icon";

function TableHeader() {
  // const [activeSorter, setActiveSorted] = useState("date");
  return (
    <header className={styles.table__header}>
      <div className={styles.checkboxBlock}>
        <Checkbox />
      </div>
      <div className={styles.numberBlock}>#</div>
      <div className={styles.dateBlock}>
        Дата <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.statusBlock}>
        Статус <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.positionBlock}>
        Позиций <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.sumBlock}>
        Сумма <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.nameBlock}>ФИО покупателя</div>
    </header>
  );
}

export default TableHeader;
