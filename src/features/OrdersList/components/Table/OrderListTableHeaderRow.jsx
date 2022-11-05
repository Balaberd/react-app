import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import TableHeaderCell from "shared/Table/TableHeaderCell/TableHeaderCell";
import Icon from "shared/Icon/Icon";
import TableHeader from "shared/Table/TableHeader/TableHeader";
import styles from "./OrderListRows.module.css";

function OrderListTableHeaderRow({
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
        <TableCell className={styles.checkbox}>
          <Checkbox checked={isAllRowChecked} onChange={checkAllRows} />
        </TableCell>

        <TableCell className={styles.index}>#</TableCell>

        <TableHeaderCell
          className={cn(styles.date, {
            [styles.activeSorter]: activeSorter === "date",
          })}
          onClick={createHadnleChangeActiveSorter("date")}
        >
          Дата
          <Icon type="arrow" className={styles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(styles.status, {
            [styles.activeSorter]: activeSorter === "status",
          })}
          onClick={createHadnleChangeActiveSorter("status")}
        >
          Статус
          <Icon type="arrow" className={styles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(styles.numberOfPositions, {
            [styles.activeSorter]: activeSorter === "numberOfPositions",
          })}
          onClick={createHadnleChangeActiveSorter("numberOfPositions")}
        >
          Позиций
          <Icon type="arrow" className={styles.icon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(styles.sum, {
            [styles.activeSorter]: activeSorter === "sum",
          })}
          onClick={createHadnleChangeActiveSorter("sum")}
        >
          Сумма
          <Icon type="arrow" className={styles.icon} />
        </TableHeaderCell>

        <TableCell className={styles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}

export default OrderListTableHeaderRow;
