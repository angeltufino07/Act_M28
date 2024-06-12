import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem} from '../../actions/index';
import {LiP,ImgCart,BtnEliminar} from "./styles";


class Cart extends Component{

    //para eliminar el producto del carrito 
    ///con el id creado 
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
   
    render(){
              
    let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                       
            <LiP key={item.id}>
                    <div> 
                        <ImgCart src={item.img} alt={item.img} className=""/>
                    </div>                               
                    <div>
                            <span>{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Precio $: {item.price}</b></p> 
                            <p>
                                 <b>Cantidad: {item.quantity}</b> 
                            </p>             
                        <BtnEliminar  onClick={()=>{this.handleRemove(item.id)}}>Eliminar</BtnEliminar>
                    </div>             
            </LiP>
                         
                    )
                })
            ):

             (
                <p>Carrito Vacio</p>
             )
       return(
            <div>
                <div>
                    <h5>Tu carrito de compras</h5>
                    <ul>
                        {addedItems}
                    </ul>
                </div> 
                     
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)