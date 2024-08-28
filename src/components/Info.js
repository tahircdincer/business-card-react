import Photo from "./Photo";
import PersonInfo from "./PersonInfo";
import PersonButtons from "./PersonButtons";
import Footer from "./Footer";
import About from "./About";
export default function Info() {
  return (
    <div className="card">
      <Photo />
      <div class="container__info">
        <PersonInfo />
        <PersonButtons />
        <About />
      </div>
      <Footer />
    </div>
  );
}
