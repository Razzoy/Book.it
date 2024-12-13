import { NavLink, useLocation } from "react-router-dom";
import { IconComponent } from "../IconComponent/IconComponent";
import style from '../Header/Header.module.scss'
import { useEffect, useState } from "react";


export function Header() {

    const [time, setTime] = useState("");
    const location = useLocation();

    const updateLocalTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, "0");
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        setTime(`${hours}:${minutes}`);
    }

    useEffect(() => {
        updateLocalTime();
        const interval = setInterval(updateLocalTime, 1000);
        return () => clearInterval(interval);
    })

    const userName = "Guest";

    return (
        <div className={style.headerStyling}>
            {location.pathname === "/" && <h1>Welcome back {userName}</h1>}
            <div className={style.iconStyling}>
                <NavLink to={'/signIn'}>
                    <IconComponent src={"user.png"} />
                </NavLink>
                <IconComponent src={"alarm.png"} />
                <IconComponent src={"clock.png"} />
                <span className={style.clockTime}>{time}</span>
            </div>
        </div>
    )
}
