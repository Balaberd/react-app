/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import Icon from "shared/Icon/Icon";
import styles from "./Input.module.css";
import Button from "../Button/Button";

const noop = () => {};

function Input({
  value = "",
  onChange = noop,
  onReset = noop,
  isIncorrect,
  disabled,
  label,
  placeholder,
  prefix,
  postfix,
  className,
  readOnly,
  onKeyDown = noop,
}) {
  const lockedPostfix = disabled && (
    <Icon type="locked" className={styles.icon} />
  );
  const resetPostfix = value && (
    <Button size="short" icon="xMedium" onClick={onReset} />
  );

  const componentStyles = cn(styles._, className, {
    [styles.incorrect]: isIncorrect && !disabled,
    [styles.disabled]: disabled,
  });

  return (
    <div className={componentStyles}>
      <label className={styles.label}>
        {label}
        <div className={styles.wrapper}>
          {prefix}
          <input
            onKeyDown={onKeyDown}
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
          />
          {postfix || lockedPostfix || resetPostfix}
        </div>
      </label>
    </div>
  );
}

export default Input;
