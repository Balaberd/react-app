import React from "react";
import Button from "shared/Button/Button";

function DeletionApprover({ handleToggleDropdownVisibility }) {
  return (
    <>
      Удалить n записей?
      <Button isFullWidth height="short">
        Удалить
      </Button>
      <Button
        isFullWidth
        height="short"
        theme="primary"
        onClick={handleToggleDropdownVisibility}
      >
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
