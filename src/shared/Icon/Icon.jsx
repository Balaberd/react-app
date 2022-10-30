import React from "react";
import { ReactComponent as IconSun } from "./sun.svg";
import { ReactComponent as IconFilter } from "./filter.svg";
import { ReactComponent as IconLocked } from "./locked.svg";
import { ReactComponent as IconMoon } from "./moon.svg";
import { ReactComponent as IconRefresh } from "./refresh.svg";
import { ReactComponent as IconXLarge } from "./x-large.svg";
import { ReactComponent as IconXMedium } from "./x-medium.svg";
import { ReactComponent as IconArrow } from "./v_arrow.svg";
import { ReactComponent as IconSearch } from "./search.svg";
import { ReactComponent as IconDot } from "./dot.svg";
import { ReactComponent as IconAbort } from "./abort.svg";
import { ReactComponent as IconCheck } from "./checkmark.svg";
import { ReactComponent as IconPencil } from "./pencil.svg";
import { ReactComponent as IconBin } from "./bin.svg";

const ICON_MAP = {
  sun: IconSun,
  moon: IconMoon,
  filter: IconFilter,
  locked: IconLocked,
  refresh: IconRefresh,
  xLarge: IconXLarge,
  xMedium: IconXMedium,
  arrow: IconArrow,
  search: IconSearch,
  dot: IconDot,
  abort: IconAbort,
  check: IconCheck,
  pencil: IconPencil,
  bin: IconBin,
};

function Icon({ type, className, ...props }) {
  const Component = ICON_MAP[type];
  return Component ? (
    <Component
      className={className}
      width="1rem"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  ) : null;
}

export default Icon;
