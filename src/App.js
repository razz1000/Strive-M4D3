import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import MyNavbar from "./Components/MyNavbar";
import MyCarousel from "./Components/MyCarousel";

function App() {
  return (
    <div>
      <div>
        <MyNavbar />
      </div>

      <div>
        <MyCarousel />
      </div>
    </div>
  );
}

export default App;
