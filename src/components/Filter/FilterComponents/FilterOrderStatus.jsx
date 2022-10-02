import React, { useState } from "react";
import cn from "classnames";
import MultipleStatusDropdown from "../../UI/Dropdowns/OrderMulipleStatusSelector/OrderMulipleStatusSelector";
import styles from "../Filter.module.css";
import Input from "../../UI/Input/Input";

function FilterOrderStatus() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState("Любой");
  return (
    <div className={styles["filter__order-status"]}>
      <Input
        propsStyles={{
          incorrect: false,
          locked: false,
        }}
        label="Статус заказа"
        hardValue={inputValue}
        onClick={() => setDropdownVisibility(!dropdownVisibility)}
      />
      <div>
        <div
          className={cn(styles["dropdown-wrapper"], {
            [styles["dropdown-wrapper_unvisible"]]: !dropdownVisibility,
          })}
        >
          <MultipleStatusDropdown />
        </div>
      </div>
    </div>
  );
}

export default FilterOrderStatus;
