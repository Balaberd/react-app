import React from "react";
import cn from "classnames";
import styles from "./Dropdown.module.css";

const mixHandlers = (handler1, handler2) => () => {
  handler1();
  if (handler2) {
    handler2();
  }
};

function Dropdown({
  trigger,
  children,
  childrenClassName,
  triggerClassNameWithActiveTrigger,
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const mixedHandlers = mixHandlers(toggleDropdown, trigger.props.onClick);
  const TriggerElement = React.cloneElement(trigger, {
    onClick: mixedHandlers,
    className: cn({ [triggerClassNameWithActiveTrigger]: isVisible }),
  });

  return (
    <div className={styles.trigger}>
      {TriggerElement}
      {isVisible && (
        <div className={cn(childrenClassName, styles.overlay)}>{children}</div>
      )}
    </div>
  );
}

export default Dropdown;
