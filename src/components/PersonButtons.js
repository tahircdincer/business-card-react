import IconImage from "../assets/img/Icon.png";
import LinkedInImage from "../assets/img/linkedin-icon.png";

export default function PersonButtons() {
  return (
    <div className="btn-container">
      <button className="btn btn__email">
        <img src={IconImage} alt= " Email Icon " />
        <span>Email</span>
      </button>
      <button className="btn btn__linkedin">
        <img src={LinkedInImage} alt= " LinkedIn Icon " />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}
