import React, { useState, useEffect } from "react";
import cn from "classnames";
import Button from "../../../shared/Button/Button";
import styles from "./Header.module.css";
import switchThemeColors from "../../lib/switchThemeColors";
import ThemeSwitcher from "../Dropdowns/ThemeSwitcher/ThemeSwitcher";

function Header({ className }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const openDropdownHandler = () => setDropdownVisibility(!dropdownVisibility);
  useEffect(() => {
    switchThemeColors(currentTheme);
  }, [currentTheme]);
  const componentStyles = cn(styles.header, className);
  return (
    <header className={componentStyles}>
      <h1>Список заказов</h1>
      <Button
        icon={currentTheme === "light" ? "sun" : "moon"}
        onClick={openDropdownHandler}
      >
        {currentTheme === "light" ? "Светлая тема" : "Темная тема"}
      </Button>
      <div
        className={cn(styles.dropdownWrapper, {
          [styles.dropdownWrapper_visible]: dropdownVisibility,
        })}
      >
        <ThemeSwitcher
          currentTheme={currentTheme}
          changeTheme={setCurrentTheme}
        />
      </div>
    </header>
  );
}

export default Header;
