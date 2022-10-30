import cn from "classnames";
import { React, useState } from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import Icon from "shared/Icon/Icon";
import TableRowItem from "../TableRowItem/TableRowItem";
import styles from "./TableHeaderRow.module.css";

function TableHeaderRow() {
  const [activeSorter, setActiveSorter] = useState("date");

  const handleChangeSorterToDate = () => {
    setActiveSorter("date");
  };
  const handleChangeSorterToStatus = () => {
    setActiveSorter("status");
  };
  const handleChangeSorterToPositions = () => {
    setActiveSorter("positions");
  };
  const handleChangeSorterToSum = () => {
    setActiveSorter("sum");
  };

  const getComponentStylesForSorter = (sorterName) =>
    cn(styles.button, activeSorter === sorterName && styles.activeSorter);

  return (
    <TableRowItem
      index="#"
      checkbox={<Checkbox />}
      date={
        <button
          className={getComponentStylesForSorter("date")}
          onClick={handleChangeSorterToDate}
        >
          Дата <Icon type="arrow" />
        </button>
      }
      status={
        <button
          className={getComponentStylesForSorter("status")}
          onClick={handleChangeSorterToStatus}
        >
          Статус <Icon type="arrow" />
        </button>
      }
      numberOfPositions={
        <button
          className={getComponentStylesForSorter("positions")}
          onClick={handleChangeSorterToPositions}
        >
          Позиций <Icon type="arrow" />
        </button>
      }
      sum={
        <button
          className={getComponentStylesForSorter("sum")}
          onClick={handleChangeSorterToSum}
        >
          Сумма <Icon type="arrow" />
        </button>
      }
      name="ФИО покупателя"
    />
  );
}

export default TableHeaderRow;
