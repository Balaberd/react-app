import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import Input from "shared/Input/Input";
import cn from "classnames";
import { React } from "react";
import {
  changeErrorStatus,
  changeModalValue,
  closeModal,
} from "features/OrdersList/model/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import { changeOrder } from "features/OrdersList/model/orders/ordersSlice";
import { getFormatedDate } from "features/OrdersList/lib/date";
import styles from "./ModalForm.module.css";
import OrderDetail from "./OrderDetail/OrderDetail";
import StatusSelectorByModal from "./StatusSelectorByModal/StatusSelectorByModal";
import dropdownSelectorStyles from "./StatusSelectorByModal/StatusSelectorByModal.module.css";
import CloseModalConfirmation from "./CloseModalConfirmation/CloseModalConfirmation";
import CloseModalConfirmationStyle from "./CloseModalConfirmation/CloseModalConfirmation.module.css";

const getCurrentOrderByID = (id) => (state) =>
  state.orders.allOrders.filter((order) => order.id === id)[0];

function ModalForm() {
  const {
    isModalFormActive,
    orderId,
    index,
    date,
    customerName,
    status,
    confirmationСodeValue,
    confirmationСode,
    haveErrorWhileSaving,
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

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const isEnteredCodeCorrect = confirmationСodeValue === confirmationСode;
  const handleChangeOrder = () => {
    if (isEnteredCodeCorrect) {
      dispatch(changeOrder({ id: orderId, customerName, status }));
      handleCloseModal();
    } else {
      dispatch(changeErrorStatus());
    }
  };

  const originalOrder = useSelector(getCurrentOrderByID(orderId));
  const isWithoutChanges =
    originalOrder?.customerName === customerName &&
    originalOrder?.status === status;

  const handleAOpenApproverOrCloseModal = () => {
    if (isWithoutChanges) handleCloseModal();
  };

  return (
    <div className={styles._}>
      <div
        className={cn(styles.modalBackground, {
          [styles.active]: isModalFormActive,
        })}
      />

      <div
        className={cn(styles.modalForm, {
          [styles.active]: isModalFormActive,
        })}
      >
        <div className={styles.header}>
          Заявка #{index}
          <Dropdown
            triggerClassName={styles.button}
            trigger={
              <Button icon="xLarge" onClick={handleAOpenApproverOrCloseModal} />
            }
            childrenClassName={CloseModalConfirmationStyle._}
          >
            <CloseModalConfirmation onModalClose={handleCloseModal} />
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
                <StatusSelectorByModal />
              </Dropdown>
            }
          />

          <Input
            label="Код подтверждения"
            value={confirmationСodeValue}
            onChange={createHandleValueChanger("confirmationСodeValue")}
            onReset={createHandleValueReset("confirmationСodeValue")}
            isIncorrect={haveErrorWhileSaving}
          />
        </div>

        <div className={styles.footer}>
          {haveErrorWhileSaving && "Ошибка или индикатор загрузки"}
          <Button icon="check" theme="primary" onClick={handleChangeOrder}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
