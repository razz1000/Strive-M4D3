import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import MyNavbar from "./Components/MyNavbar";
import MyCarousel from "./Components/MyCarousel";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <MyCarousel />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
