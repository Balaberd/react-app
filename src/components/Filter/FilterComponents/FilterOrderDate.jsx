import React from "react";
import Input from "../../UI/Input/Input";
import styles from "../Filter.module.css";

function FilterOrderDate() {
  return (
    <div className={styles["filter__order-date"]}>
      <Input
        propsStyles={{
          incorrect: false,
          locked: false,
        }}
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        contentBefore="c"
      />
      <Input
        propsStyles={{
          incorrect: false,
          locked: false,
        }}
        placeholder="dd.mm.yyyy"
        contentBefore="по"
      />
    </div>
  );
}

export default FilterOrderDate;
