import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { resetCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import React, { useState } from "react";
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
  const [externalDropdownSetter, setExternalDropdownSetter] = useState(false);
  const handleToggleDropdown = () => {
    setExternalDropdownSetter(!externalDropdownSetter);
  };
  const { pageLimit, currentPage } = useSelector((state) => state.filters);
  const maxPage = Math.ceil(ordersLength / pageLimit);

  const dropdownTrigger = <Button>#</Button>;

  const dispatch = useDispatch();
  const handleChangePage = (pageNumber) => {
    if (pageNumber !== "..." && pageNumber !== currentPage) {
      dispatch(resetCheckedOrders());
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
      <Dropdown
        externalVisibilityValue={externalDropdownSetter}
        externalVisibilitySetter={handleToggleDropdown}
        trigger={dropdownTrigger}
        childrenClassName={styles.dropdown}
        dropdownVisibility={externalDropdownSetter}
      >
        <ChoosePage
          ordersLength={ordersLength}
          maxPage={maxPage}
          onDropdownClose={handleToggleDropdown}
        />
      </Dropdown>
    </div>
  );
}

export default Pagination;
