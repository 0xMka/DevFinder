import s from "./style.module.css";
import IconLocation from "../../assets/icon-location.svg";
import IconWebsite from "../../assets/icon-website.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconCompany from "../../assets/icon-company.svg";

export function UserDetail({ user }) {
  function getInfo(info) {
    if (info !== null) {
      return info;
    } else {
      return "Not Available";
    }
  }

  return (
    <div className={s.contain}>
      <div className={s.main}>
        <img className={s.iconLocation} src={IconLocation} />
        <span className={s.detail}>{getInfo(user.location)}</span>
      </div>

      <div className={s.main}>
        <img className={s.iconWebsite} src={IconWebsite} />
        <span className={s.detail}>{getInfo(user.html_url)}</span>
      </div>

      <div className={s.main}>
        <img className={s.iconTwitter} src={IconTwitter} />
        <span className={s.detail}>{getInfo(user.twitter_username)}</span>
      </div>

      <div className={s.main}>
        <img className={s.iconCompany} src={IconCompany} />
        <span className={s.detail}>{getInfo(user.company)}</span>
      </div>
    </div>
  );
}
