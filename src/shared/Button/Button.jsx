import React from "react";
import cn from "classnames";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

function Button({
  isFullWidth,
  size,
  theme,
  icon,
  children,
  className,
  disabled,
  ...props
}) {
  const componentStyles = cn(styles._, className, {
    [styles.short]: size === "short",
    [styles.primary]: theme === "primary",
    [styles.warning]: theme === "warning",
    [styles.fullWidth]: isFullWidth,
    [styles.iconOnly]: !children,
    [styles.disabled]: disabled,
  });
  return (
    <button
      disabled={disabled}
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
