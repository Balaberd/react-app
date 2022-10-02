import React from "react";
import styles from "./Radio.module.css";

function Radio({ name, checked }) {
  return <input className={styles["custom-radio"]} name={name} type="radio" checked={checked} />;
}

export default Radio;
