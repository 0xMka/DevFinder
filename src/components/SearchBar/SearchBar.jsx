import s from "./style.module.css";
import IconSeach from "../../assets/icon-search.svg";
import { useContext, useState } from "react";
import { THEME, ThemeModeContext } from "../../context/ThemeContext";

export function SearchBar({ onSubmit }) {
  const { themeMode } = useContext(ThemeModeContext);
  const [inputValue, setInputValue] = useState("");

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  function handleClick() {
    if (inputValue !== undefined) {
      onSubmit(inputValue);
    }
  }

  return (
    <div className={s.container}>
      <img className={s.img} src={IconSeach} alt="seach-icon" />
      <input
        style={{
          color: THEME[themeMode].textColor,
          backgroundColor: THEME[themeMode].backgroundColor,
          boxShadow: THEME[themeMode].boxShadow,
        }}
        onKeyUp={submit}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search GitHub username…"
        maxLength="25"
      />
      <button className={s.buttonSearch} type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
