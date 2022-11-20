import React, { useState } from "react";
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
  triggerClassName,
  childrenClassName,
  triggerClassNameWithActiveTrigger,
  externalVisibilityValue = null,
  externalVisibilitySetter = () => {},
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown =
    externalVisibilityValue === null
      ? () => {
          setIsVisible(!isVisible);
        }
      : externalVisibilitySetter;

  const visibility =
    externalVisibilityValue === null ? isVisible : externalVisibilityValue;

  const mixedHandlers = mixHandlers(toggleDropdown, trigger.props.onClick);
  const TriggerElement = React.cloneElement(trigger, {
    onClick: mixedHandlers,
    className: cn(triggerClassName, {
      [triggerClassNameWithActiveTrigger]: visibility,
    }),
  });

  return (
    <div className={styles.trigger}>
      {TriggerElement}
      {visibility && (
        <div className={cn(childrenClassName, styles.overlay)}>{children}</div>
      )}
    </div>
  );
}

export default Dropdown;
