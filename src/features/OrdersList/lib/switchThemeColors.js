const switchThemeColors = (theme) => {
  const body = document.querySelector("body");
  if (theme === "dark") {
    body.classList.add("body_darkTheme");
  } else {
    body.classList.remove("body_darkTheme");
  }
};

export default switchThemeColors;
