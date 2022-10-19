/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import Button from "../Button/Button";

function Input({
  value,
  onChange,
  resetValue,
  isIncorrect,
  disabled,
  label,
  placeholder,
  contentBefore,
  className,
  button,
  readonly,
}) {
  let buttonElement;
  if (button) {
    buttonElement = button;
  } else if (disabled) {
    buttonElement = <Button disabled icon="locked" />;
  } else if (value) {
    buttonElement = <Button isShort icon="x-medium" onClick={resetValue} />;
  }
  const componentStyles = cn(styles.customInput, className, {
    [styles.customInput_incorrect]: isIncorrect,
    [styles.customInput_disabled]: disabled,
  });
  return (
    <div className={componentStyles}>
      <label className={styles.customInput__label}>
        {label}
        <div className={styles.customInput__wrapper}>
          {contentBefore && <span>{contentBefore}</span>}
          <input
            className={styles.customInput__input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={!!disabled}
            readOnly={!!readonly}
          />
          {buttonElement}
        </div>
      </label>
    </div>
  );
}

export default Input;
