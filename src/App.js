import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
