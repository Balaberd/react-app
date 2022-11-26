import { cloneElement, React, useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.css";

const mixHandlers = (handler1, handler2) => () => {
  handler1();
  if (handler2) {
    handler2();
  }
};

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

function Dropdown({
  trigger,
  triggerClassName,
  triggerActiveClassName,
  children,
  childrenClassName,
  shouldCloseOnClick = true,
  shouldCloseOutsideClick = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  if (shouldCloseOutsideClick)
    useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const mixedHandler = mixHandlers(toggleDropdown, trigger.props.onClick);

  const triggerElement = cloneElement(trigger, {
    onClick: mixedHandler,
    className: cn(triggerClassName, {
      [triggerActiveClassName]: isOpen,
    }),
  });

  const handleClick = (event) => {
    if (!shouldCloseOnClick) {
      return;
    }
    const classes = event.target.className;
    if (typeof classes === "string" && classes.includes("dropdownCloser")) {
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  return (
    <div ref={dropdownRef} className={styles.trigger}>
      {triggerElement}
      {isOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          onClick={handleClick}
          className={cn(styles.children, childrenClassName)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
