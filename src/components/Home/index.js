import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index';
import {DivP,ImgWatch,BtnAgregar} from "./styles";


 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
               
                <DivP key={item.id}>
                        
                            <ImgWatch src={item.img} alt={item.title}/>
                            <span >{item.title}</span>
                            <BtnAgregar to="/" onClick={()=>{this.handleClick(item.id)}}>Agregar</BtnAgregar>
                            <p>Precio: ${item.price}</p>
                        
                 </DivP>
              
            )
        })

        return(
            <>
            
                
                    {itemList}
                
                </>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)