import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1>Gallery</h1>
        <div className="container text-center">
          <div className="row ">
            {Array.apply(null, { length: 9 }).map(() => (
              <Card imgUrl={"https://via.placeholder.com/200"} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
