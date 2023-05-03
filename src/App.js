import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Home-page";
import PageShop from "./components/PageShop";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={ <Homepage />}/>
              <Route path="shop" element={<PageShop/>} />
          </Routes>
      </BrowserRouter>
);
}

export default App;
