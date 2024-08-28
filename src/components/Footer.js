import GithubIcon from "../assets/img/github-icon.png";
import FacebookIcon from "../assets/img/facebook-icon.png";
import InstagramIcon from "../assets/img/instagram-icon.png";
import TwitterIcon from "../assets/img/twitter-icon.png";
export default function Footer() {
  return (
    <footer>
      <div className="icon-container">
        <a href="#">
          <img src={GithubIcon} />
        </a>
        <a href="#">
          <img src={FacebookIcon} />
        </a>
        <a href="#">
          <img src={InstagramIcon} />
        </a>
        <a href="#">
          <img src={TwitterIcon} />
        </a>
      </div>
    </footer>
  );
}
