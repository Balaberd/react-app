import React from "react";
import Button from "shared/Button/Button";

function ClosingFormConfirmation({ onModalClose }) {
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
        className="dropdownCloser"
      >
        Остаться
      </Button>
    </>
  );
}

export default ClosingFormConfirmation;
