import React from "react";
import Button from "../../../../shared/Button/Button";
import styles from "./TableFooter.module.css";

function TableFooter() {
  return (
    <footer className={styles.table__footer}>
      <div className={styles.nodeChecked}>Выбрано записей: 15</div>
      <Button icon="pencil" isFilled isShort>
        Изменить статус
      </Button>
      <Button icon="bin" isFilled isShort className={styles.binButton}>
        Удалить
      </Button>
    </footer>
  );
}

export default TableFooter;
