import s from "./style.module.css";
import { UserHeader } from "../UserHeader/UserHeader";
import { UserContent } from "../UserContent/UserContent";
import { UserRating } from "../UserRating/UserRating";
import { UserDetail } from "../UserDetail/UserDetail";
import { useContext } from "react";
import { THEME, ThemeModeContext } from "../../context/ThemeContext";

export function CardGitHubUser({ user }) {
  const { themeMode } = useContext(ThemeModeContext);
  return (
    <div
      style={{
        color: THEME[themeMode].textColor,
        backgroundColor: THEME[themeMode].backgroundColor,
      }}
      className={s.container}
    >
      <UserHeader user={user} />
      <UserContent user={user} />
      <UserRating user={user} />
      <UserDetail user={user} />
    </div>
  );
}
