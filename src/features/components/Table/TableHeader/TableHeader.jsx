import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import Icon from "shared/Icon/Icon";
import styles from "./TableHeader.module.css";

function TableHeader() {
  return (
    <header className={styles._}>
      <div className={styles.checkboxCell}>
        <Checkbox />
      </div>
      <div className={styles.numberCell}>#</div>
      <div className={styles.dateCell}>
        Дата <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.statusCell}>
        Статус <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.positionCell}>
        Позиций <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.sumCell}>
        Сумма <Icon type="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.nameCell}>ФИО покупателя</div>
    </header>
  );
}

export default TableHeader;
