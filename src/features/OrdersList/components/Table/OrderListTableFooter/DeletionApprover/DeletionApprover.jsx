import React from "react";
import Button from "shared/Button/Button";

function DeletionApprover() {
  return (
    <>
      Удалить т записей?
      <Button size="short" isFullWidth>
        Удалить
      </Button>
      <Button size="short" theme="primary" isFullWidth>
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
