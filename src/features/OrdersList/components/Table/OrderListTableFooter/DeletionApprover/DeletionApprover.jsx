import React from "react";
import Button from "shared/Button/Button";

function DeletionApprover() {
  return (
    <>
      Удалить т записей?
      <Button heightSize="short" isFullWidth>
        Удалить
      </Button>
      <Button heightSize="short" theme="primary" isFullWidth>
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
