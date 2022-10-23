import React, { useState, useEffect } from "react";
import cn from "classnames";
import Button from "shared/Button/Button";
import switchThemeColors from "features/lib/switchThemeColors";
import styles from "./Header.module.css";
import ThemeSwitcher from "../Dropdowns/ThemeSwitcher/ThemeSwitcher";

function Header({ className }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const handleToggleVisibility = () =>
    setDropdownVisibility(!dropdownVisibility);
  useEffect(() => {
    switchThemeColors(currentTheme);
  }, [currentTheme]);
  const componentStyles = cn(styles._, className);
  return (
    <header className={componentStyles}>
      <h1>Список заказов</h1>
      <Button
        icon={currentTheme === "light" ? "sun" : "moon"}
        onClick={handleToggleVisibility}
      >
        {currentTheme === "light" ? "Светлая тема" : "Темная тема"}
      </Button>
      {dropdownVisibility && (
        <div className={styles.dropdownWrapper}>
          <ThemeSwitcher
            currentTheme={currentTheme}
            changeTheme={setCurrentTheme}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
