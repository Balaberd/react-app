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
  changeActiveSorter,
  changeSorterDirection,
} from "features/OrdersList/model/filters/filtersSlice";
import { checkAllOrdersOnPage } from "features/OrdersList/model/orders/ordersSlice";
import { getCheckedOrdersID } from "features/OrdersList/model/selectors";
import styles from "./OrderListTableHeader.module.css";
import rowStyles from "../RowMarkup.module.css";

function OrderListTableHeader({ allOrdersOnPage }) {
  const { activeSorter, isAscending } = useSelector((state) => state.filters);

  const checkedOrdersID = useSelector(getCheckedOrdersID);

  const dispatch = useDispatch();

  const createHadnleChangeActiveSorter = (sorter) => () => {
    if (activeSorter === sorter) {
      dispatch(changeSorterDirection());
    } else {
      dispatch(changeActiveSorter(sorter));
    }
  };

  const allOrdersIdOnPage = allOrdersOnPage.map((el) => el.id);

  const isAllOrdersChecked = allOrdersOnPage.length === checkedOrdersID.length;

  const handleCheckAllOrdersOnPage = () => {
    if (isAllOrdersChecked) {
      dispatch(checkAllOrdersOnPage([]));
    } else {
      dispatch(checkAllOrdersOnPage(allOrdersIdOnPage));
    }
  };

  return (
    <TableHeader>
      <TableRow>
        <TableCell className={rowStyles.checkbox}>
          <Checkbox
            checked={isAllOrdersChecked && checkedOrdersID.length > 0}
            onChange={() => handleCheckAllOrdersOnPage()}
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
              [activeSorter === "date" && styles.flipped]: !isAscending,
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
              [activeSorter === "status" && styles.flipped]: !isAscending,
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
                !isAscending,
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
              [activeSorter === "sum" && styles.flipped]: !isAscending,
            })}
          />
        </TableHeaderCell>

        <TableCell className={rowStyles.name}>ФИО покупателя</TableCell>
      </TableRow>
    </TableHeader>
  );
}

export default OrderListTableHeader;
