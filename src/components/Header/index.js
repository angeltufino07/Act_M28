import React from 'react';
import { Link } from 'react-router-dom'
import {HeaderSt,H1St,LinkRou} from "./styles";


const HeaderMenu = ()=>{
    return(

        <HeaderSt>
            <H1St >Watches Mi Tienda Online</H1St>
                  <div>              
                   <LinkRou to="/">Inicio</LinkRou>
                   <LinkRou to="/cart" >Carrito</LinkRou>        
                   </div>
        </HeaderSt>
    )
}
export default HeaderMenu;