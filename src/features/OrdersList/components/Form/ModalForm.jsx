import Button from "shared/Button/Button";
import Dropdown from "shared/Dropdown/Dropdown";
import Input from "shared/Input/Input";
import cn from "classnames";
import { React, useState } from "react";
import {
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
import DropdownCloseApprover from "./DropdownCloseApprover/DropdownCloseApprover";
import dropdownCloseApproverStyle from "./DropdownCloseApprover/DropdownCloseApprover.module.css";

function ModalForm() {
  const [isSelectorDropdownVisible, setIsSelectorDropdownVisible] =
    useState(false);
  const handleToggleSelectorVisibility = () => {
    setIsSelectorDropdownVisible(!isSelectorDropdownVisible);
  };
  const [isApproveDropdownVisible, setIsApproveDropdownVisible] =
    useState(false);
  const handleToggleApproverVisibility = () => {
    setIsApproveDropdownVisible(!isApproveDropdownVisible);
  };

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

  const handleCloseModal = () => {
    dispatch(closeModal());
    setIsApproveDropdownVisible(false);
  };

  const isEnteredCodeCorrect = confirmationСodeValue === confirmationСode;
  const handleChangeOrder = () => {
    if (isEnteredCodeCorrect) {
      dispatch(changeOrder({ id: orderId, customerName, status }));
      handleCloseModal();
    }
  };

  const triggerSelectorElement = <Button icon="arrow" />;

  const dropdownSelectorElement = (
    <Dropdown
      externalVisibilityValue={isSelectorDropdownVisible}
      externalVisibilitySetter={handleToggleSelectorVisibility}
      trigger={triggerSelectorElement}
      childrenClassName={dropdownSelectorStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusSelectorByModal onDropdownClose={handleToggleSelectorVisibility} />
    </Dropdown>
  );

  const triggerApproveChangeElement = <Button icon="xLarge" />;

  const dropdownApproveChangeElement = (
    <Dropdown
      externalVisibilityValue={isApproveDropdownVisible}
      externalVisibilitySetter={handleToggleApproverVisibility}
      triggerClassName={styles.button}
      trigger={triggerApproveChangeElement}
      childrenClassName={dropdownCloseApproverStyle._}
    >
      <DropdownCloseApprover
        onDropdownClose={handleToggleApproverVisibility}
        onModalClose={handleCloseModal}
      />
    </Dropdown>
  );

  return (
    <div className={styles._}>
      <div
        className={cn(styles.modalBackground, {
          [styles.active]: isModalFormActive,
        })}
      />

      <div
        className={cn(styles.modalForm, { [styles.active]: isModalFormActive })}
      >
        <div className={styles.header}>
          Заявка #{index}
          {dropdownApproveChangeElement}
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
            postfix={dropdownSelectorElement}
          />

          <Input
            label="Код подтверждения"
            value={confirmationСodeValue}
            onChange={createHandleValueChanger("confirmationСodeValue")}
            onReset={createHandleValueReset("confirmationСodeValue")}
            isIncorrect={
              !isEnteredCodeCorrect && confirmationСodeValue.length > 0
            }
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
