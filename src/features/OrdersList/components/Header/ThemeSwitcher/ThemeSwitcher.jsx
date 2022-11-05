import React from "react";
import Button from "shared/Button/Button";

function ThemeSwitcher({ currentTheme, changeTheme }) {
  const changeToLigthThemeHandler = () => changeTheme("light");
  const changeToDarkThemeHandler = () => changeTheme("dark");

  return (
    <>
      Выберите тему
      <Button
        theme={currentTheme === "light" && "primary"}
        size="short"
        isFullWidth
        icon="sun"
        onClick={changeToLigthThemeHandler}
      >
        Светлая
      </Button>
      <Button
        theme={currentTheme === "dark" && "primary"}
        size="short"
        isFullWidth
        icon="moon"
        onClick={changeToDarkThemeHandler}
      >
        Темная
      </Button>
    </>
  );
}

export default ThemeSwitcher;
