/* eslint-disable no-unused-vars */
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import Input from "shared/Input/Input";
import cn from "classnames";
import { React, useState } from "react";
import { changeModalValue } from "features/OrdersList/model/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { getFormatDate } from "features/OrdersList/lib/getObjectDate";
import { changeOrder } from "features/OrdersList/model/orders/ordersSlice";
import styles from "./ModalForm.module.css";
import OrderDetail from "./OrderDetail/OrderDetail";

function ModalForm() {
  const toggleElement = <Button icon="arrow" />;
  const dropdownElement = (
    <Dropdown
      trigger={toggleElement}
      // childrenClassName={dropdownStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      {/* <StatusesSelector /> */}
    </Dropdown>
  );

  const {
    isModalFormActive,
    orderId,
    index,
    date,
    fullName,
    status,
    confirmationСodeValue,
    confirmationСode,
  } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const createHandleValueChanger =
    (valueName) =>
    ({ target: { value } }) => {
      dispatch(changeModalValue({ valueName, newValue: value }));
    };
  const createHandleValueReset = (valueName) => () => {
    dispatch(changeModalValue({ valueName, newValue: "" }));
  };

  const isEnteredCodeCorrect = confirmationСodeValue === confirmationСode;

  const handleChangeOrder = () => {
    dispatch(changeOrder({ id: orderId, lastName: fullName, status }));
  };

  return (
    <div className={cn(styles._, { [styles.active]: isModalFormActive })}>
      <div className={styles.header}>
        Заявка #{index}
        <Button className={styles.button} icon="xLarge" />
      </div>

      <div className={styles.body}>
        <Input
          disabled
          value={getFormatDate(date)}
          label="Дата и время заказа"
        />
        <Input
          value={fullName}
          onChange={createHandleValueChanger("fullName")}
          onReset={createHandleValueReset("fullName")}
          label="ФИО покупателя"
        />
        <OrderDetail />
        <Input disabled value="Новичок" label="Уровень лояльности" />

        <Input
          value={STATUSES_NAMES_TRANSLATION[status]}
          readOnly
          label="Статус заказа"
          postfix={dropdownElement}
        />

        <Input
          label="Код подтверждения"
          value={confirmationСodeValue}
          onChange={createHandleValueChanger("confirmationСodeValue")}
          onReset={createHandleValueReset("confirmationСodeValue")}
          isIncorrect={!isEnteredCodeCorrect}
        />
      </div>

      <div className={styles.footer}>
        Ошибка или индикатор загрузки
        <Button icon="check" theme="primary" onClick={handleChangeOrder}>
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default ModalForm;
