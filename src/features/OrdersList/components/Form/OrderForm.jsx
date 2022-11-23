import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import Input from "shared/Input/Input";
import cn from "classnames";
import { React, useState } from "react";
import {
  changeModalValue,
  closeModal,
} from "features/OrdersList/model/orderForm/orderFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder } from "features/OrdersList/model/orders/ordersSlice";
import { getFormatedDate } from "features/OrdersList/lib/date";
import {
  getOrderByID,
  getOrderForm,
} from "features/OrdersList/model/selectors";
import { STATUSES_NAMES_TRANSLATION } from "features/OrdersList/const";
import styles from "./OrderForm.module.css";
import OrderDetail from "./OrderDetail/OrderDetail";
import dropdownSelectorStyles from "./StatusSelectorByForm/StatusSelectorByForm.module.css";
import closingFormConfirmationStyle from "./ClosingFormConfirmation/ClosingFormConfirmation.module.css";
import ClosingFormConfirmation from "./ClosingFormConfirmation/ClosingFormConfirmation";
import StatusSelectorByForm from "./StatusSelectorByForm/StatusSelectorByForm";

const initialErrorState = {
  password: false,
  name: false,
};

function OrderForm() {
  const [errorInForm, setErrorInForm] = useState(initialErrorState);
  const {
    orderId,
    index,
    date,
    customerName,
    status,
    confirmationСodeValue,
    confirmationСode,
  } = useSelector(getOrderForm);

  const isFormOpen = !!orderId;

  const dispatch = useDispatch();
  const createHandleValueChanger =
    (valueName) =>
    ({ target: { value } }) => {
      dispatch(changeModalValue({ valueName, newValue: value }));
    };
  const createHandleValueReset = (valueName) => () => {
    dispatch(changeModalValue({ valueName, newValue: "" }));
  };

  const handleCloseModal = () => {
    setErrorInForm(initialErrorState);
    dispatch(closeModal());
  };

  const originalOrder = useSelector(getOrderByID(orderId));
  const hasChanges = !(
    originalOrder?.customerName === customerName &&
    originalOrder?.status === status
  );

  const handleAnOpenApproverOrCloseModal = () => {
    if (!hasChanges) handleCloseModal();
  };

  const isEnteredCodeCorrect = confirmationСodeValue === confirmationСode;

  const handleChangeOrder = () => {
    if (!isEnteredCodeCorrect || !customerName) {
      setErrorInForm({
        password: !isEnteredCodeCorrect,
        name: !customerName,
      });
    } else {
      dispatch(changeOrder({ id: orderId, customerName, status }));
      handleCloseModal();
      setErrorInForm(initialErrorState);
    }
  };

  return (
    <div className={styles._}>
      <div
        className={cn(styles.modalBackground, {
          [styles.active]: isFormOpen,
        })}
      />

      <div
        className={cn(styles.form, {
          [styles.active]: isFormOpen,
        })}
      >
        <div className={styles.header}>
          Заявка #{index}
          <Dropdown
            triggerClassName={styles.button}
            trigger={
              <Button
                icon="xLarge"
                onClick={handleAnOpenApproverOrCloseModal}
              />
            }
            childrenClassName={closingFormConfirmationStyle._}
          >
            <ClosingFormConfirmation onModalClose={handleCloseModal} />
          </Dropdown>
        </div>
        <div className={styles.body}>
          <Input
            disabled
            value={getFormatedDate(date)}
            label="Дата и время заказа"
          />
          <Input
            value={customerName}
            isIncorrect={errorInForm.name}
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
            postfix={
              <Dropdown
                trigger={<Button icon="arrow" />}
                childrenClassName={dropdownSelectorStyles._}
                triggerActiveClassName={styles.flipped}
              >
                <StatusSelectorByForm orderStatus={status} />
              </Dropdown>
            }
          />

          <Input
            label="Код подтверждения"
            value={confirmationСodeValue}
            onChange={createHandleValueChanger("confirmationСodeValue")}
            onReset={createHandleValueReset("confirmationСodeValue")}
            isIncorrect={errorInForm.password}
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.errorsText}>
            {errorInForm.name && (
              <span>Поле с именем не может быть пустым</span>
            )}
            {errorInForm.password && <span>Неверный пароль</span>}
          </div>
          <Button icon="check" theme="primary" onClick={handleChangeOrder}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
