import s from "./style.module.css";
import { THEME, ThemeModeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export function UserRating({ user }) {
  const { themeMode } = useContext(ThemeModeContext);
  return (
    <div
      style={{
        color: THEME[themeMode].textColor,
        backgroundColor: THEME[themeMode].backgroundColorBody,
      }}
      className={s.contain}
    >
      <div className={s.main}>
        <span className={s.title}>Repos</span>
        <span className={s.result}>{user.public_repos}</span>
      </div>
      <div className={s.main}>
        <span className={s.title}>Followers</span>
        <span className={s.result}>{user.followers}</span>
      </div>
      <div className={s.main}>
        <span className={s.title}>Following</span>
        <span className={s.result}>{user.following}</span>
      </div>
    </div>
  );
}
