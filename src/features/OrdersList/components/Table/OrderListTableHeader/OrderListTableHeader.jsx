import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import TableHeaderCell from "shared/Table/TableHeaderCell/TableHeaderCell";
import Icon from "shared/Icon/Icon";
import TableHeader from "shared/Table/TableHeader/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAllOrders,
  deleteAllCheck,
} from "features/OrdersList/model/orders/ordersSlice";
import {
  changeSortDirection,
  changeSorter,
} from "features/OrdersList/model/sorter/sorterSlice";
import styles from "./OrderListTableHeader.module.css";
import rowStyles from "../RowMarkup.module.css";

function OrderListTableHeader() {
  const isAllOrdesChecked = useSelector(
    (state) =>
      state.orders.allOrders.length === state.orders.checkedOrders.length
  );

  const dispatch = useDispatch();

  const handleToggleAllCheck = () => {
    if (isAllOrdesChecked) {
      dispatch(deleteAllCheck());
    } else {
      dispatch(checkAllOrders());
    }
  };

  const { activeSorter, isIncreaseDirection } = useSelector(
    (state) => state.sorter
  );

  const createHadnleChangeActiveSorter = (sorterName) => () => {
    if (activeSorter !== sorterName) {
      dispatch(changeSorter(sorterName));
    } else dispatch(changeSortDirection());
  };

  return (
    <TableHeader>
      <TableRow>
        <TableCell className={rowStyles.checkbox}>
          <Checkbox
            checked={isAllOrdesChecked}
            onChange={() => handleToggleAllCheck()}
          />
        </TableCell>

        <TableCell className={rowStyles.index}>#</TableCell>

        <TableHeaderCell
          className={cn(rowStyles.date, {
            [styles.activeSorter]: activeSorter === "date",
          })}
          onClick={createHadnleChangeActiveSorter("date")}
        >
          Дата
          <Icon
            type="arrow"
            className={cn(rowStyles.icon, {
              [activeSorter === "date" && styles.flipped]: !isIncreaseDirection,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.status, {
            [styles.activeSorter]: activeSorter === "status",
          })}
          onClick={createHadnleChangeActiveSorter("status")}
        >
          Статус
          <Icon
            type="arrow"
            className={cn(rowStyles.icon, {
              [activeSorter === "status" && styles.flipped]:
                !isIncreaseDirection,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.numberOfPositions, {
            [styles.activeSorter]: activeSorter === "numberOfPositions",
          })}
          onClick={createHadnleChangeActiveSorter("numberOfPositions")}
        >
          Позиций
          <Icon
            type="arrow"
            className={cn(rowStyles.icon, {
              [activeSorter === "numberOfPositions" && styles.flipped]:
                !isIncreaseDirection,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={cn(rowStyles.sum, {
            [styles.activeSorter]: activeSorter === "sum",
          })}
          onClick={createHadnleChangeActiveSorter("sum")}
        >
          Сумма
          <Icon
            type="arrow"
            className={cn(rowStyles.icon, {
              [activeSorter === "sum" && styles.flipped]: !isIncreaseDirection,
            })}
          />
        </TableHeaderCell>

        <TableCell className={rowStyles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}

export default OrderListTableHeader;
