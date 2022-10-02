/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import cn from "classnames";
import Button from "../UI/Button/Button";
import styles from "./Header.module.css";
import switchThemeColors from "../switchThemeColors";
import ThemeSwitcher from "../UI/Dropdowns/ThemeSwitcher/ThemeSwitcher";

function Header() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [theme, setTheme] = useState("light");
  switchThemeColors(theme);

  return (
    <header className={styles.header}>
      <h1>Список заказов</h1>
      <Button
        propsStyles={{
          disabled: false,
          filled: false,
          short: false,
          fullWidth: false,
        }}
        text={theme === "light" ? "Светлая тема" : "Темная тема"}
        icon={theme === "light" ? "sun" : "moon"}
        callback={() => setDropdownVisibility(!dropdownVisibility)}
        type={null}
      />
      <div
        className={cn(styles["dropdown-wrapper"], {
          [styles["dropdown-wrapper_unvisible"]]: !dropdownVisibility,
        })}
      >
        <ThemeSwitcher theme={theme} changeTheme={setTheme} />
      </div>
    </header>
  );
}

export default Header;
