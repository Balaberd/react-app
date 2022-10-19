import React from "react";
import cn from "classnames";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

function Button({
  isFullWidth,
  isShort,
  isFilled,
  icon,
  children,
  className,
  ...props
}) {
  const componentStyles = cn(styles.button, className, {
    [styles.button_short]: isShort,
    [styles.button_filled]: isFilled,
    [styles.button_fullWidth]: isFullWidth,
    [styles.button_iconOnly]: !children,
    [styles.button_disabled]: props?.disabled,
  });
  return (
    <button
      className={componentStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Icon type={icon} />
      {children}
    </button>
  );
}

export default Button;
