import React from "react";
import cn from "classnames";
import Input from "shared/Input/Input";
import styles from "./SumFilter.module.css";

function SumFilter({ className }) {
  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <Input label="Сумма заказа" placeholder="&#8381;" prefix="от" />
      <Input placeholder="&#8381;" prefix="до" />
    </div>
  );
}

export default SumFilter;
