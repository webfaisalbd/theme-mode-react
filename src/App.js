import { useContext } from "react";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";

import './App.css'

import { ChooseTheme } from "./context/ThemeContext"; 

function App() {
  const { theme, setTheme } = useContext(ChooseTheme);
  // console.log(theme);

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div className="container">

      <div className="flex_justify_between_align_center">
        <h1>Theme Mode React </h1>
        <button onClick={handleTheme} className="btn">{theme == "dark" ? "Light" : "Dark"}</button>
      </div>


      <Home />
      <Footer />

    </div>
  );
}

export default App;
