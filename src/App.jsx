import s from "./style.module.css";
import { useEffect, useState, useContext } from "react";
import { GitHubAPI } from "./api/GitHubAPI";
import { CardGitHubUser } from "./components/CardGitHubUser/CardGitHubUser";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { THEME, ThemeModeContext } from "./context/ThemeContext";

function App() {
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);
  const [notFound, setNotFound] = useState(false);

  const [user, setUser] = useState("0xMka");
  const [currentUserGitHub, setCurrentUserGitHub] = useState();

  async function fetchUserGitHub(user) {
    try {
      const callUser = await GitHubAPI.fetchUsers(user);
      if (callUser !== undefined) {
        setCurrentUserGitHub(callUser);
        setNotFound(false);
      }
    } catch (error) {
      console.error("Une erreur est survenue : ", error);
      setNotFound(true);

      setTimeout(() => {
        setNotFound(false);
      }, 2000);
    }
  }

  useEffect(() => {
    fetchUserGitHub(user);
  }, [user]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        style={{
          backgroundColor: THEME[themeMode].backgroundColorBody,
          height: "100vh",
        }}
        className={s.container}
      >
        <Header title="devfinder" />
        <SearchBar onSubmit={setUser} notFound={notFound} />
        {currentUserGitHub && <CardGitHubUser user={currentUserGitHub} />}
      </div>
    </ThemeModeContext.Provider>
  );
}

export default App;
