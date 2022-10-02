/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const switchThemeColors = (theme) => {
  const colors = {
    "--font-color": ["#000000", "#BCC4CC"],
    "--background-color": ["#FFFFFF", "#2B2D33"],
    "--dim-elements-color": ["#BAD8F5", "#454E52"],
    "--additional-filter-background": ["#EBF0F5", "#171B1F"],
  };
  const root = document.querySelector(":root");
  for (const key in colors) {
    root.style.setProperty(key, colors[key][theme === "light" ? 0 : 1]);
  }
};

export default switchThemeColors;
