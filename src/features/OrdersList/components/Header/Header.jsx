import React, { useState, useEffect } from "react";
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import switchThemeColors from "features/OrdersList/lib/switchThemeColors";
import styles from "./Header.module.css";
import themeSwitcherStyles from "./ThemeSwitcher/ThemeSwitcher.module.css";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

function Header() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    switchThemeColors(currentTheme);
  }, [currentTheme]);

  const toggleElement = (
    <Button icon={currentTheme === "light" ? "sun" : "moon"}>
      {currentTheme === "light" ? "Светлая тема" : "Темная тема"}
    </Button>
  );

  return (
    <header className={styles._}>
      <h1>Список заказов</h1>
      <Dropdown
        trigger={toggleElement}
        childrenClassName={themeSwitcherStyles._}
      >
        <ThemeSwitcher
          currentTheme={currentTheme}
          changeTheme={setCurrentTheme}
        />
      </Dropdown>
    </header>
  );
}

export default Header;
