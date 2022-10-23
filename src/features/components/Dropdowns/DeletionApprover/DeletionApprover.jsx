import React from "react";
import Button from "shared/Button/Button";
import styles from "./DeletionApprover.module.css";

function DeletionApprover({ handleToggleDropdownVisibility }) {
  return (
    <div className={styles.dropdown}>
      <span className={styles.title}>Удалить n записей?</span>
      <Button isFullWidth isShort>
        Удалить
      </Button>
      <Button
        isFullWidth
        isShort
        isFilled
        onClick={handleToggleDropdownVisibility}
      >
        Отмена
      </Button>
    </div>
  );
}

export default DeletionApprover;
