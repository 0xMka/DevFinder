import s from "./style.module.css";

export function UserHeader({ user }) {
  function convertDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return "Joined " + date.toLocaleDateString("en-US", options);
  }

  return (
    <div className={s.container}>
      <div>
        <img className={s.img} src={user.avatar_url} alt={user.login} />
      </div>
      <div className={s.main}>
        <span className={s.title}>{user.name}</span>
        <span className={s.name}>{user.company}</span>
        <span className={s.date}>{convertDate(user.created_at)}</span>
      </div>
    </div>
  );
}
