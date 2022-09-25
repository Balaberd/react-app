/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styles from "./Input.module.css";
import { ReactComponent as IconSearch } from "../Icon/search.svg";
import Button from "../Button/Button";

function Input({ classes, type, label, placeholder, textBefore }) {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (value) => setInputValue(value);
  const resetInput = () => setInputValue("");

  let inputStyles = styles["custom-input"];
  if (classes)
    classes.split(" ").forEach((el) => (inputStyles += ` ${styles[el]}`));

  return (
    <div className={inputStyles}>
      <label className={styles["custom-input__label"]}>
        {label}
        <form className={styles["custom-input__wrapper"]}>
          {type === "searchbar" && (
            <IconSearch width="1rem" style={{ marginRight: ".5rem" }} />
          )}
          {textBefore && <span>{textBefore}</span>}
          <input
            className={styles["custom-input__input"]}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => changeInputValue(e.target.value)}
            disabled={inputStyles.includes("custom-input_disabled")}
          />
          {inputStyles.includes("custom-input_disabled") ? (
            <Button icon="locked" classes="button_disabled" />
          ) : inputValue ? (
            <Button
              classes="button_short"
              icon="x-medium"
              type="reset"
              callback={resetInput}
            />
          ) : null}
        </form>
      </label>
    </div>
  );
}

export default Input;
