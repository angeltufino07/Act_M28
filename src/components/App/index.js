import React,{ Component } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom';

import  {MainHome} from "./styles";
import HeaderMenu from "../Header/index";

import Home from '../Home/index';
import Cart from '../Cart/index';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <div >
            <HeaderMenu/>

            <MainHome>
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/Cart" element={ <Cart /> } />
                </Routes>
            </MainHome>
          </div>
        </BrowserRouter>
        
      </>
  );
}
export default App;
