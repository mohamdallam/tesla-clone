import "./App.css";
import { useState } from "react";

import Header from "./layout/Header";
import Menu from "./layout/Menu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBlock from "./layout/HeaderBlock";
import Login from "./layout/Login";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              {isMenuOpen && <Menu />}
              <HeaderBlock />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
