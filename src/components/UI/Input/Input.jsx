/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import Button from "../Button/Button";

function Input({ propsStyles, label, placeholder, contentBefore, hardValue }) {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (value) => setInputValue(value);
  const resetInput = () => setInputValue("");

  return (
    <div
      className={cn(styles["custom-input"], {
        [styles["custom-input_incorrect"]]: propsStyles.incorrect,
        [styles["custom-input_disabled"]]: propsStyles.locked,
      })}
    >
      <label className={styles["custom-input__label"]}>
        {label}
        <form className={styles["custom-input__wrapper"]}>
          {contentBefore && <span>{contentBefore}</span>}
          <input
            className={styles["custom-input__input"]}
            placeholder={placeholder}
            value={hardValue ?? inputValue}
            onChange={(e) => changeInputValue(e.target.value)}
            disabled={propsStyles.locked}
          />
          {propsStyles.locked ? (
            <Button
              propsStyles={{
                disabled: true,
                filled: false,
                short: false,
                fullWidth: false,
              }}
              icon="locked"
            />
          ) : inputValue ? (
            <Button
              propsStyles={{
                disabled: false,
                filled: false,
                short: true,
                fullWidth: false,
              }}
              icon="x-medium"
              callback={resetInput}
            />
          ) : null}
        </form>
      </label>
    </div>
  );
}

export default Input;
