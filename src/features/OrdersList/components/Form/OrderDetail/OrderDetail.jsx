import React from "react";
import Table from "shared/Table/Table";
import TableBody from "shared/Table/TableBody/TableBody";
import TableCell from "shared/Table/TableCell/TableCell";
import TableFooter from "shared/Table/TableFooter/TableFooter";
import TableHeader from "shared/Table/TableHeader/TableHeader";
import TableRow from "shared/Table/TableRow/TableRow";
import cn from "classnames";
import styles from "./OrderDetail.module.css";

function OrderDetail() {
  return (
    <Table className={styles._}>
      <TableHeader className={styles.header}>
        <TableRow className={styles.row}>
          <TableCell className={styles.vendorCodeCell}>Артикул</TableCell>
          <TableCell className={styles.nameCell}>Наименование</TableCell>
          <TableCell className={styles.priceCell}>Цена</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.body}>
        <TableRow className={cn(styles.row, styles.bodyRow)}>
          <TableCell className={styles.vendorCodeCell}>rt.12024</TableCell>
          <TableCell className={styles.nameCell}>
            Стилл блейдс фо грас
          </TableCell>
          <TableCell className={styles.priceCell}>15 339 &#8381;</TableCell>
        </TableRow>
        <TableRow className={cn(styles.row, styles.bodyRow)}>
          <TableCell className={styles.vendorCodeCell}>al.24600</TableCell>
          <TableCell className={styles.nameCell}>
            Газонокосилка Apple magic Grass Removed
          </TableCell>
          <TableCell className={styles.priceCell}>82 664 &#8381;</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter className={styles.footer}>
        Итоговая сумма: 98 003 &#8381;
      </TableFooter>
    </Table>
  );
}

export default OrderDetail;
