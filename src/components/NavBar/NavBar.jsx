
import { useState } from "react";
import { IconComponent } from "../IconComponent/IconComponent";
import style from "../NavBar/NavBar.module.scss";

export function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${style.navBarStyling} ${isExpanded ? style.expanded : ""}`}>
      <button className={style.alarmButton} onClick={toggleNavBar}>
        <IconComponent src={"Alarm.png"} alt={"Alarm"} />
      </button>
    </div>
  );
}