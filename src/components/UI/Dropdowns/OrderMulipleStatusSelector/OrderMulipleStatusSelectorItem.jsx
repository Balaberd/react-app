/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import cn from "classnames";
import styles from "../Dropdown.module.css";
import Checkbox from "../../Chechbox/Checkbox";

function OrderMulipleStatusSelectorItem({ status }) {
  const [check, setCheck] = useState(false);
  return (
    <div
      className={cn(styles.dropdown__item, {
        [styles.dropdown__radio_checked]: check,
      })}
      onClick={() => setCheck(!check)}
    >
      <Checkbox checked={check} />
      <span className={styles["dropdown__item-text"]}>{status}</span>
    </div>
  );
}

export default OrderMulipleStatusSelectorItem;
