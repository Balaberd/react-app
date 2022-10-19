import React from "react";
import cn from "classnames";
import styles from "./Radio.module.css";

function Radio({ className, ...props }) {
  const componentStyles = cn(styles.customRadio, className);
  return (
    <input
      className={componentStyles}
      type="radio"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export default Radio;
