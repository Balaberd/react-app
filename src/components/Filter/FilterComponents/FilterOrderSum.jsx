import React from "react";
import Input from "../../UI/Input/Input";
import styles from "../Filter.module.css";

function FilterOrderSum() {
  return (
    <div className={styles["filter__order-sum"]}>
      <Input
        propsStyles={{
          incorrect: false,
          locked: false,
        }}
        label="Сумма заказа"
        placeholder="&#8381;"
        contentBefore="от"
      />
      <Input
        propsStyles={{
          incorrect: false,
          locked: false,
        }}
        placeholder="&#8381;"
        contentBefore="до"
      />
    </div>
  );
}

export default FilterOrderSum;
