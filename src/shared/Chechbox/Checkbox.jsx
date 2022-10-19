/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.css";

const noop = () => {};

function Checkbox({ className, checked = false, onChange = noop }) {
  const componentStyles = cn(styles.customCheckbox, className, {
    [styles.customCheckbox_checked]: checked,
  });
  return (
    <div className={componentStyles}>
      <label>
        <input
          className={styles.customCheckbox__checkbox}
          type="checkbox"
          checked={!!checked}
          onChange={onChange}
        />
        <svg
          className={styles.customCheckbox__icon}
          viewBox="0 0 16 16"
          fill="#8055FF"
          stroke="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
        </svg>
      </label>
    </div>
  );
}

export default Checkbox;
