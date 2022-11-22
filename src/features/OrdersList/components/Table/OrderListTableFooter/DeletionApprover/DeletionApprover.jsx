import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { deleteCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/Button/Button";

function DeletionApprover({ numberOfCheckedOrders, ordersOnPageLength }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filters.currentPage);
  const checkedOrdersLength = useSelector(
    (state) => state.orders.checkedOrdersID.length
  );
  const ordersLengthAfterDeletion = ordersOnPageLength - checkedOrdersLength;

  const handleDeleteChoosedOrders = () => {
    dispatch(deleteCheckedOrders());
    if (ordersLengthAfterDeletion === 0 && currentPage !== 1) {
      dispatch(changeCurrentPage(currentPage - 1));
    }
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
        className="dropdownCloser"
      >
        Отмена
      </Button>
    </>
  );
}

export default DeletionApprover;
