import { changeCurrentPage } from "features/OrdersList/model/filters/filtersSlice";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "shared/Input/Input";

const ENTER_KEY_CODE = 13;

function ChoosePage({ maxPage }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = ({ target: { value } }) => {
    if (Number.isInteger(Number(value)) && value[0] !== "0")
      setInputValue(value);
  };

  const handleResetValue = () => {
    setInputValue("");
  };

  const { currentPage } = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const selectPage = (e, pageNumber) => {
    if (
      e.keyCode === ENTER_KEY_CODE &&
      currentPage !== pageNumber &&
      pageNumber <= maxPage &&
      pageNumber > 0
    )
      dispatch(changeCurrentPage(Number(pageNumber)));
  };

  return (
    <>
      Номер страницы
      <Input
        value={inputValue}
        isIncorrect={inputValue > maxPage || inputValue < 1}
        onChange={handleChangeValue}
        onReset={handleResetValue}
        onKeyDown={(event) => selectPage(event, inputValue)}
        placeholder="Введите номер"
      />
    </>
  );
}

export default ChoosePage;
