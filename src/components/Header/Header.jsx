import s from "./style.module.css";
import IconSun from "../../assets/icon-sun.svg";
import IconMoon from "../../assets/icon-moon.svg";
import { useContext, useState } from "react";
import { THEME, ThemeModeContext } from "../../context/ThemeContext";

export function Header({ title }) {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);
  const [isHovered, setIsHovered] = useState(false);

  function toggleThemeMode() {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }

  function changeIcon() {
    if (themeMode === "light") {
      return IconMoon;
    } else {
      return IconSun;
    }
  }
  return (
    <div style={{ color: THEME[themeMode].textColor }} className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.themeToggle}>
        <span
          style={{
            color: isHovered
              ? THEME[themeMode].ToggleTextColorHovered
              : THEME[themeMode].ToggletTextColorNotHovered,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleThemeMode}
          className={s.themeTitle}
        >
          {themeMode === "light" ? "dark" : "light"}
        </span>
        <img
          style={{
            fill: isHovered
              ? THEME[themeMode].textColorHovered
              : THEME[themeMode].textColor,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleThemeMode}
          className={s.themeImg}
          src={changeIcon()}
          alt="theme mode"
        />
      </div>
    </div>
  );
}
