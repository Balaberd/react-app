import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import TableHeaderCell from "shared/Table/TableHeaderCell/TableHeaderCell";
import Icon from "shared/Icon/Icon";
import TableHeader from "shared/Table/TableHeader/TableHeader";
import styles from "./OrderListTableHeader.module.css";
import rowStyles from "../RowMarkup.module.css";

function OrderListTableHeader({
  activeSorter,
  setActiveSorter,
  isAllRowChecked,
  checkAllRows,
}) {
  const createHadnleChangeActiveSorter = (sorterName) => () => {
    // eslint-disable-next-line no-unused-expressions
    activeSorter !== sorterName && setActiveSorter(sorterName);
  };

  return (
    <TableHeader>
      <TableRow>
        <TableCell className={rowStyles.checkbox}>
          <Checkbox checked={isAllRowChecked} onChange={checkAllRows} />
        </TableCell>

        <TableCell className={rowStyles.index}>#</TableCell>

        <TableHeaderCell
          className={cn(rowStyles.date, {
            [styles.activeSorter]: activeSorter === "date",
          })}
          onClick={createHadnleChangeActiveSorter("date")}
        >
          Дата
          <Icon type="arrow" className={rowStyles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.status, {
            [styles.activeSorter]: activeSorter === "status",
          })}
          onClick={createHadnleChangeActiveSorter("status")}
        >
          Статус
          <Icon type="arrow" className={rowStyles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.numberOfPositions, {
            [styles.activeSorter]: activeSorter === "numberOfPositions",
          })}
          onClick={createHadnleChangeActiveSorter("numberOfPositions")}
        >
          Позиций
          <Icon type="arrow" className={rowStyles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.sum, {
            [rowStyles.activeSorter]: activeSorter === "sum",
          })}
          onClick={createHadnleChangeActiveSorter("sum")}
        >
          Сумма
          <Icon type="arrow" className={rowStyles.icon} />
        </TableHeaderCell>

        <TableCell className={rowStyles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}

export default OrderListTableHeader;
