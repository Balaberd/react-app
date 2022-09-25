import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

function Button({ classes, text, icon, callback, type }) {
  let buttonStyles = styles.button;
  if (!text) buttonStyles += ` ${styles["button_icon-only"]}`;
  if (classes)
    classes.split(" ").forEach((el) => {
      buttonStyles += ` ${styles[el]}`;
    });

  return (
    <button
      className={buttonStyles}
      disabled={buttonStyles.includes("button_disabled")}
      onClick={(e) => callback(e)}
      type={type}
    >
      <Icon type={icon} />
      {text ?? text}
    </button>
  );
}

export default Button;
