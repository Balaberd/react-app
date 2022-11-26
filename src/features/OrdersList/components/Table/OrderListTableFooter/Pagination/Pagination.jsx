import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { checkOrders } from "features/OrdersList/model/orders/ordersSlice";
import { getFilters } from "features/OrdersList/model/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import { v4 as uuidv4 } from "uuid";
import ChoosePage from "./ChoosePage/ChoosePage";
import styles from "./Pagination.module.css";

const createButton = (pageNumber, currentPage, callback) => (
  <Button
    key={uuidv4()}
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
  for (let i = 1; i <= maxPage; i += 1) {
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
  const { pageLimit, currentPage } = useSelector(getFilters);
  const maxPage = Math.ceil(ordersLength / pageLimit);

  const dropdownTrigger = <Button>#</Button>;

  const dispatch = useDispatch();
  const handleChangePage = (pageNumber) => {
    if (pageNumber !== "..." && pageNumber !== currentPage) {
      dispatch(checkOrders([]));
      dispatch(changeCurrentPage(pageNumber));
    }
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
        <ChoosePage
          ordersLength={ordersLength}
          maxPage={maxPage}
          // onDropdownClose={handleToggleDropdown}
        />
      </Dropdown>
    </div>
  );
}

export default Pagination;
