import "./App.css";
import { useState } from "react";

import Header from "./layout/Header";
import Menu from "./layout/Menu";

import { BrowserRouter, Router, Route } from "react-router-dom";
import HeaderBlock from "./layout/HeaderBlock";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
      </div>
    </BrowserRouter>
  );
}

export default App;
