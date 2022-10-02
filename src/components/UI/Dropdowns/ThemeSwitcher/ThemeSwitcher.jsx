import React from "react";
import cn from "classnames";
import Button from "../../Button/Button";
import styles from "../Dropdown.module.css";

function ThemeSwitcher({ theme, changeTheme }) {
  return (
    <div className={cn(styles.dropdown, styles["dropdown_choose-theme"])}>
      <span className={styles.dropdown__title}>Выбирите тему</span>

      <Button
        propsStyles={{
          disabled: false,
          filled: theme === "light",
          short: true,
          fullWidth: true,
        }}
        text="Светлая"
        icon="sun"
        callback={() => changeTheme("light")}
        type={null}
      />

      <Button
        propsStyles={{
          disabled: false,
          filled: theme === "dark",
          short: true,
          fullWidth: true,
        }}
        text="Темная"
        icon="moon"
        callback={() => changeTheme("dark")}
        type={null}
      />
    </div>
  );
}

export default ThemeSwitcher;
