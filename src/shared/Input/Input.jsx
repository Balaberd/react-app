/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import Button from "../Button/Button";

const noop = () => {};

function Input({
  value = "",
  onChange = noop,
  resetValue = noop,
  isIncorrect,
  disabled,
  label,
  placeholder,
  prefix,
  postfix = null,
  className,
  readOnly,
}) {
  let posfixElement;
  if (postfix) {
    posfixElement = postfix;
  } else if (disabled) {
    posfixElement = <Button disabled icon="locked" />;
  } else if (value) {
    posfixElement = <Button isShort icon="x-medium" onClick={resetValue} />;
  }
  const componentStyles = cn(styles._, className, {
    [styles.incorrect]: isIncorrect,
    [styles.disabled]: disabled,
  });
  return (
    <div className={componentStyles}>
      <label className={styles.label}>
        {label}
        <div className={styles.wrapper}>
          {prefix && <span>{prefix}</span>}
          <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={!!disabled}
            readOnly={!!readOnly}
          />
          {posfixElement}
        </div>
      </label>
    </div>
  );
}

export default Input;
