import React from "react";
import cn from "classnames";
import styles from "./Table.module.css";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";
import TableHeader from "./TableHeader/TableHeader";

function Table({ additionalFilterVisibility }) {
  const componentStyles = cn(styles._, {
    [styles.additionalFilterOpen]: additionalFilterVisibility,
  });
  return (
    <section className={componentStyles}>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </section>
  );
}

export default Table;
