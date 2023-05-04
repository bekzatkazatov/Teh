import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Home-page";
import PageShop from "./components/PageShop";
import Header from "./components/Header";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProduct} from "./Redux/action/action";


function App () {
    const dispatch = useDispatch()
    const products= useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
  return (
      <div>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path='/' element={ <Homepage />}/>
                  <Route path="/shop" element={<PageShop products={products}/>} />
              </Routes>
          </BrowserRouter>
      </div>
);
}

export default App;
