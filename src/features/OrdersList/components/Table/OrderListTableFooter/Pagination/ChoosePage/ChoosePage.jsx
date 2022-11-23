import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { checkOrders } from "features/OrdersList/model/orders/ordersSlice";
import { getFilters } from "features/OrdersList/model/selectors";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";

const ENTER_KEY_CODE = 13;

function ChoosePage({ maxPage, onDropdownClose }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = ({ target: { value } }) => {
    if (Number.isInteger(Number(value)) && value[0] !== "0") {
      setInputValue(value);
    }
  };

  const handleResetValue = () => {
    setInputValue("");
  };

  const { currentPage } = useSelector(getFilters);

  const dispatch = useDispatch();
  const selectPage = (e, pageNumber) => {
    if (
      e.keyCode === ENTER_KEY_CODE &&
      currentPage !== pageNumber &&
      pageNumber <= maxPage &&
      pageNumber > 0
    ) {
      dispatch(checkOrders([]));
      dispatch(changeCurrentPage(Number(pageNumber)));
      onDropdownClose();
    }
  };

  return (
    <>
      Номер страницы
      <Input
        value={inputValue}
        isIncorrect={inputValue > maxPage}
        onChange={handleChangeValue}
        onReset={handleResetValue}
        onKeyDown={(event) => selectPage(event, inputValue)}
        placeholder="Введите номер"
      />
    </>
  );
}

export default ChoosePage;
