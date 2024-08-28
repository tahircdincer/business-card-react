import Info from "./components/Info";
import "./App.css";

function Card() {
  return (
    <div className="card">
      <Info />
    </div>
  );
}
function App() {
  return (
    <div className="page-container">
      <Card />
    </div>
  );
}

export default App;
