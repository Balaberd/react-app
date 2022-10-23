import React, { useState } from "react";
import Button from "shared/Button/Button";
import DeletionApprover from "features/components/Dropdowns/DeletionApprover/DeletionApprover";
import styles from "./TableFooter.module.css";

function TableFooter() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const handleToggleDropdownVisibility = () =>
    setDropdownVisibility(!dropdownVisibility);
  return (
    <footer className={styles._}>
      <div className={styles.nodeChecked}>Выбрано записей: 15</div>
      <Button icon="pencil" isFilled isShort>
        Изменить статус
      </Button>
      <div className={styles.deleteBlockWrapper}>
        <Button
          icon="bin"
          isFilled
          isShort
          className={styles.binButton}
          onClick={handleToggleDropdownVisibility}
        >
          Удалить
        </Button>
        {dropdownVisibility && (
          <div className={styles.dropdownWrapper}>
            <DeletionApprover
              handleToggleDropdownVisibility={handleToggleDropdownVisibility}
            />
          </div>
        )}
      </div>
    </footer>
  );
}

export default TableFooter;
