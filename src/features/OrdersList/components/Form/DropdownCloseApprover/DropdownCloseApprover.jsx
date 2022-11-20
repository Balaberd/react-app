import React from "react";
import Button from "shared/Button/Button";

function DropdownCloseApprover({ onDropdownClose, onModalClose }) {
  return (
    <>
      Есть несохраненные изменения
      <Button isFullWidth size="short" onClick={onModalClose}>
        Сбросить
      </Button>
      <Button
        isFullWidth
        size="short"
        theme="primary"
        onClick={onDropdownClose}
      >
        Остаться
      </Button>
    </>
  );
}

export default DropdownCloseApprover;
