import React from "react";
import cn from "classnames";
import styles from "./Table.module.css";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";
import TableHeader from "./TableHeader/TableHeader";

function Table({ additionalFilterVisibility, statusValues }) {
  const componentStyles = cn(styles.table, {
    [styles.table_additionalFilterOpen]: additionalFilterVisibility,
  });
  return (
    <section className={componentStyles}>
      <TableHeader />
      <TableBody statusValues={statusValues} />
      <TableFooter />
    </section>
  );
}

export default Table;
