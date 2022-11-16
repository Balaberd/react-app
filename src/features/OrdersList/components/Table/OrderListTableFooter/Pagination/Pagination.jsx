import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import ChoosePage from "./ChoosePage/ChoosePage";
import styles from "./Pagination.module.css";

const createButton = (pageNumber, currentPage, callback) => (
  <Button
    key={pageNumber}
    className={styles.buttons}
    size="short"
    theme={pageNumber === currentPage && "primary"}
    onClick={() => callback(pageNumber)}
  >
    {pageNumber}
  </Button>
);

const createPaginationElement = (
  currentPage,
  maxPage,
  buttonCreator,
  buttonCallback
) => {
  const elements = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= maxPage; i++) {
    if (
      i === 1 ||
      Math.abs(i - currentPage) === 1 ||
      i === maxPage ||
      i === currentPage
    ) {
      elements.push(i);
    } else if (elements[elements.length - 1] !== "...") {
      elements.push("...");
    }
  }
  return elements.map((pageNumber) =>
    buttonCreator(pageNumber, currentPage, buttonCallback)
  );
};

function Pagination({ ordersLength }) {
  const { pageLimit, currentPage } = useSelector((state) => state.filters);
  const maxPage = Math.ceil(ordersLength / pageLimit);

  const dropdownTrigger = <Button>#</Button>;

  const dispatch = useDispatch();
  const handleChangePage = (pageNumber) => {
    if (pageNumber !== "..." && pageNumber !== currentPage)
      dispatch(changeCurrentPage(pageNumber));
  };

  const buttons = createPaginationElement(
    currentPage,
    maxPage,
    createButton,
    handleChangePage
  );

  return (
    <div className={styles._}>
      <div className={styles.wrapper}>{buttons}</div>
      <Dropdown trigger={dropdownTrigger} childrenClassName={styles.dropdown}>
        <ChoosePage ordersLength={ordersLength} maxPage={maxPage} />
      </Dropdown>
    </div>
  );
}

export default Pagination;
