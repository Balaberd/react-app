import {
  changeCurrentPage,
  resetAllCheckOrders,
} from "features/OrdersList/model/filters/filtersSlice";
import { deleteOrders } from "features/OrdersList/model/orders/ordersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/Button/Button";

function DeletionApprover({ numberOfCheckedOrders }) {
  const checkedOrders = useSelector((state) => state.filters.checkedOrdersId);
  const dispatch = useDispatch();

  const handleDeleteChoosedOrders = () => {
    dispatch(deleteOrders(checkedOrders));
    dispatch(resetAllCheckOrders());
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
