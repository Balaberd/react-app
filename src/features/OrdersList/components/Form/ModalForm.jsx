/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import Input from "shared/Input/Input";
import cn from "classnames";
import { React } from "react";
import {
  changeModalValue,
  closeModal,
} from "features/OrdersList/model/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { getFormatDate } from "features/OrdersList/lib/getObjectDate";
import { changeOrder } from "features/OrdersList/model/orders/ordersSlice";
import styles from "./ModalForm.module.css";
import OrderDetail from "./OrderDetail/OrderDetail";
import StatusSelectorByModal from "./StatusSelectorByModal/StatusSelectorByModal";
import dropdownStyles from "./StatusSelectorByModal/StatusSelectorByModal.module.css";

function ModalForm() {
  const toggleElement = <Button icon="arrow" />;

  const dropdownElement = (
    <Dropdown
      trigger={toggleElement}
      childrenClassName={dropdownStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusSelectorByModal />
    </Dropdown>
  );

  const {
    isModalFormActive,
    orderId,
    index,
    date,
    customerName,
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
    if (isEnteredCodeCorrect)
      dispatch(changeOrder({ id: orderId, customerName, status }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles._}>
      <div
        onClick={handleCloseModal}
        className={cn(styles.modalBackground, {
          [styles.active]: isModalFormActive,
        })}
      />

      <div
        className={cn(styles.modalForm, { [styles.active]: isModalFormActive })}
      >
        <div className={styles.header}>
          Заявка #{index}
          <Button
            className={styles.button}
            icon="xLarge"
            onClick={handleCloseModal}
          />
        </div>

        <div className={styles.body}>
          <Input
            disabled
            value={getFormatDate(date)}
            label="Дата и время заказа"
          />
          <Input
            value={customerName}
            onChange={createHandleValueChanger("customerName")}
            onReset={createHandleValueReset("customerName")}
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
    </div>
  );
}

export default ModalForm;
