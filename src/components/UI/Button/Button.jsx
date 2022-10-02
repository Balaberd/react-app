import React from "react";
import cn from "classnames";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

function Button({ propsStyles, text, icon, callback, type }) {
  return (
    <button
      className={cn(styles.button, {
        [styles.button_disabled]: propsStyles.disabled,
        [styles.button_short]: propsStyles.short,
        [styles.button_filled]: propsStyles.filled,
        [styles["button_full-width"]]: propsStyles.fullWidth,
        [styles["button_icon-only"]]: text === undefined,
      })}
      disabled={propsStyles.disabled}
      onClick={(e) => callback(e)}
      type={type}
    >
      <Icon type={icon} />
      {text}
    </button>
  );
}

export default Button;
