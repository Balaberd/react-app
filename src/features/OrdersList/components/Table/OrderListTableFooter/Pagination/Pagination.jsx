import { setCurrentPage } from "features/OrdersList/model/orders/ordersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/Button/Button";
import styles from "./Pagination.module.css";

function Pagination({ ordersLength }) {
  const { pageLimit, currentPage } = useSelector((state) => state.orders);
  // eslint-disable-next-line no-unused-vars
  const maxPage = Math.ceil(ordersLength / pageLimit);

  const dispatch = useDispatch();

  const handleChangePage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className={styles._}>
      {currentPage >= 4 && (
        <Button onClick={() => handleChangePage(1)} size="short" isFullWidth>
          1
        </Button>
      )}
      {currentPage > 4 && (
        <Button size="short" isFullWidth>
          ...
        </Button>
      )}
      {currentPage > 2 && (
        <Button
          onClick={() => handleChangePage(currentPage - 2)}
          size="short"
          isFullWidth
        >
          {currentPage - 2}
        </Button>
      )}
      {currentPage > 1 && (
        <Button
          onClick={() => handleChangePage(currentPage - 1)}
          size="short"
          isFullWidth
        >
          {currentPage - 1}
        </Button>
      )}

      <Button size="short" isFullWidth theme="primary">
        {currentPage}
      </Button>

      {currentPage < maxPage && (
        <Button
          size="short"
          isFullWidth
          onClick={() => handleChangePage(currentPage + 1)}
        >
          {currentPage + 1}
        </Button>
      )}
      {currentPage < maxPage - 1 && (
        <Button
          size="short"
          isFullWidth
          onClick={() => handleChangePage(currentPage + 2)}
        >
          {currentPage + 2}
        </Button>
      )}
      {currentPage < maxPage - 3 && (
        <Button size="short" isFullWidth>
          ...
        </Button>
      )}
      {currentPage < maxPage - 2 && (
        <Button
          size="short"
          isFullWidth
          onClick={() => handleChangePage(maxPage)}
        >
          {maxPage}
        </Button>
      )}
    </div>
  );
}

export default Pagination;
