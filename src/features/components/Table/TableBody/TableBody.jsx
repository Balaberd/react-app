import React from "react";
import cn from "classnames";
import styles from "./TableBody.module.css";
import TableItem from "./TableItem/TableItem";

const getRandom = () => Math.floor(Math.random() * 499) + 1;

const testItems = [
  {
    id: 123,
    date: "10.03.2017",
    status: "Новый",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Расчет",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Подтвержден",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отложен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Выполнен",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отменен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Новый",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Расчет",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Подтвержден",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отложен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Выполнен",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отменен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Новый",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Расчет",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Подтвержден",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отложен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Выполнен",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отменен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Новый",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Расчет",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Подтвержден",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отложен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
  {
    id: 123,
    date: "10.03.2017",
    status: "Выполнен",
    amountPositions: 5,
    sum: getRandom(),
    name: "Иванов Иван Иванович",
  },
  {
    id: 74,
    date: "11.02.2019",
    status: "Отменен",
    amountPositions: 1,
    sum: getRandom(),
    name: "Петров Петр Иванович",
  },
];

function TableBody({ statusValues }) {
  const choosedStatuses = Object.keys(statusValues).filter(
    (el) => statusValues[el]
  );
  let filtredOrders;
  if (choosedStatuses.length === 0 || choosedStatuses.length === 6) {
    filtredOrders = testItems;
  } else {
    filtredOrders = testItems.filter((el) =>
      choosedStatuses.includes(el.status)
    );
  }
  const componentStyles = cn(styles.table__body);
  return (
    <div className={componentStyles}>
      {filtredOrders.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableItem props={el} key={index} />
      ))}
    </div>
  );
}

export default TableBody;
