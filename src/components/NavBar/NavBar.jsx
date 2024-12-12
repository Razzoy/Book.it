
import { useState } from "react";
import { IconComponent } from "../IconComponent/IconComponent";
import style from "../NavBar/NavBar.module.scss";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${style.navBarStyling} ${isExpanded ? style.expanded : ""}`}>
      <div className={style.topIcons}>
        <button className={style.iconStyling} onClick={toggleNavBar}>
          <h3>{isExpanded ? "Close" : ""}</h3>
          <IconComponent src={isExpanded ? "arrowLeft.png" : "arrowRight.png"} alt={"Arrow"} />
        </button>
        {/* Splitter */}
        <span className={style.splitter}></span>
        <div className={style.iconStyling}>
          <NavLink to={'/'}>
              <h3>{isExpanded ? "Home" : ""}</h3>
              <IconComponent src={"home.png"} />
          </NavLink>
        </div>
        <div className={style.iconStyling}>
          <NavLink to={'/addEvent'}>
              <h3>{isExpanded ? "Add Event" : ""}</h3>
              <IconComponent src={"plus.png"} />
          </NavLink>
        </div>
        <div className={style.iconStyling}>
          <NavLink to={'/settings'}>
              <h3>{isExpanded ? "Settings" : ""}</h3>
              <IconComponent src={"settings.png"} />
          </NavLink>
        </div>
      </div>
      <div className={style.iconStyling}>
          <NavLink to={'/login'}>
              <h3>{isExpanded ? "Profile" : ""}</h3>
              <IconComponent src={"login.png"} />
          </NavLink>
        </div>
    </div>
  );
}