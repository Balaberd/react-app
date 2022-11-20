import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { deleteCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "shared/Button/Button";

function DeletionApprover({ numberOfCheckedOrders, onDropdownClose }) {
  const dispatch = useDispatch();

  const handleDeleteChoosedOrders = () => {
    onDropdownClose();
    dispatch(deleteCheckedOrders());
    dispatch(changeCurrentPage(1));
  };

  return (
    <>
      Удалить {numberOfCheckedOrders} записей?
      <Button size="short" isFullWidth onClick={handleDeleteChoosedOrders}>
        Удалить
      </Button>
      <Button
        size="short"
        theme="primary"
        isFullWidth
        onClick={onDropdownClose}
      >
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
