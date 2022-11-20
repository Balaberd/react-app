import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { deleteCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "shared/Button/Button";

function DeletionApprover({ numberOfCheckedOrders }) {
  const dispatch = useDispatch();

  const handleDeleteChoosedOrders = () => {
    dispatch(deleteCheckedOrders());
    dispatch(changeCurrentPage(1));
  };

  return (
    <>
      Удалить {numberOfCheckedOrders} записей?
      <Button size="short" isFullWidth onClick={handleDeleteChoosedOrders}>
        Удалить
      </Button>
      <Button size="short" theme="primary" isFullWidth>
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
