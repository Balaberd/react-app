// import { useState } from "react";
// import Button from "../Button/Button";
// import Dropdown from "../Dropdown/Dropdown";
// import styles from "./Header.module.css";

// function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [themeStatus, setThemeStatus] = useState("sun");
//   const openDropdown = () => setDropdownVisible(!dropdownVisible);

//   return (
//     <header className={styles.header}>
//       <h1>Список заказов</h1>
//       <Button
//         text={themeStatus === "sun" ? "Светлая тема" : "Темная тема"}
//         icon={themeStatus === "sun" ? "sun" : "moon"}
//         callback={openDropdown}
//       />
//       <div
//         className={`${styles["dropdown-wrapper"]} ${
//           !dropdownVisible && styles["dropdown-wrapper_unvisible"]
//         }`}
//       >
//         <Dropdown type="dropdown_choose-theme" />
//       </div>
//     </header>
//   );
// }

// export default Header;
