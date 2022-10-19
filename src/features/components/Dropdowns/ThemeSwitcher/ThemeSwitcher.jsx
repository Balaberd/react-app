import React from "react";
import cn from "classnames";
import Button from "../../../../shared/Button/Button";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher({ currentTheme, changeTheme, className }) {
  const changeToLigthThemeHandler = () => changeTheme("light");
  const changeToDarkThemeHandler = () => changeTheme("dark");

  return (
    <div
      className={cn(styles.dropdown, styles.dropdown_chooseTheme, className)}
    >
      <span className={styles.dropdown__title}>Выберите тему</span>
      <Button
        isFilled={currentTheme === "light"}
        isShort
        isFullWidth
        icon="sun"
        onClick={changeToLigthThemeHandler}
      >
        Светлая
      </Button>
      <Button
        isFilled={currentTheme === "dark"}
        isShort
        isFullWidth
        icon="moon"
        onClick={changeToDarkThemeHandler}
      >
        Темная
      </Button>
    </div>
  );
}

export default ThemeSwitcher;
