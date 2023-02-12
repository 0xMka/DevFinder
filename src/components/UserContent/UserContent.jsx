import s from "./style.module.css";

export function UserContent({ user }) {
  return (
    <>
      <span className={s.content}>
        {user.bio ? user.bio : "This profile has no bio"}
      </span>
    </>
  );
}
