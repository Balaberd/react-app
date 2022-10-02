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

function Icon({ type }) {
  switch (type) {
    case "sun":
      return <IconSun width="1rem" />;
    case "moon":
      return <IconMoon width="1rem" />;
    case "filter":
      return <IconFilter width="1rem" />;
    case "locked":
      return <IconLocked width="1rem" />;
    case "refresh":
      return <IconRefresh width="1rem" />;
    case "x-large":
      return <IconXLarge width="1rem" />;
    case "x-medium":
      return <IconXMedium width="1rem" />;
    case "arrow":
      return <IconArrow width="1rem" />;
    case "search":
      return <IconSearch width="1rem" />;
    default:
      return null;
  }
}

export default Icon;
