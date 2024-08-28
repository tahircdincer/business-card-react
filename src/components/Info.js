import IconImage from "../assets/img/Icon.png";
import LinkedInImage from "../assets/img/linkedin-icon.png";
import Photo from "./Photo";

function PersonInfo() {
  return (
    <div className="person-info">
      <h1> Tahir Dincer </h1>
      <h2> Frontend Developer </h2>
    </div>
  );
}
function PersonButtons() {
  return (
    <div className="btn-container">
      <button className="btn btn__email">
        <img src={IconImage} />
        <span>Email</span>
      </button>
      <button className="btn btn__linkedin">
        <img src={LinkedInImage} />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}

export default function Info() {
  return (
    <div>
      <Photo />
      <div class="container__info">
        <PersonInfo />
        <PersonButtons />
      </div>
    </div>
  );
}
