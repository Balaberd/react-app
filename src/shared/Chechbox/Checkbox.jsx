import React from "react";
import cn from "classnames";
import Icon from "shared/Icon/Icon";
import styles from "./Checkbox.module.css";

const noop = () => {};

function Checkbox({ className, checked, onChange = noop }) {
  const componentStyles = cn(styles._, className);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={componentStyles}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Icon type="check" className={styles.icon} />
    </label>
  );
}

export default Checkbox;
