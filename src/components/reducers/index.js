

import Produc1 from '../../assets/Curren para hombre 8106.jpg'
import Produc2 from '../../assets/Invicta Pro Diver para hombre.jpg'
import Produc3 from '../../assets/JStührling Legacy Denmark para hombre.jpg'
import Produc4 from '../../assets/Mido Multifort Cuarzo para hombre M005.jpg'
import Produc5 from '../../assets/Reloj Belug unisex.jpg'
import Produc6 from '../../assets/Reloj Casio Mtp-1302 unisex.png'

import { ADD_TO_CART,REMOVE_ITEM} from '../../actions/index';

///constante donde guardar los datos de los productos
const initState = {
    items: [
        {id:1,title:'Curren para hombre',price:1250,img:Produc1},
        {id:2,title:'Invicta Pro Diver para hombre',  price:1243,img: Produc2},
        {id:3,title:'JStührling Legacy Denmark para hombre', price:1590,img: Produc3},
        {id:4,title:'Mido Multifort Cuarzo para hombre', price:580,img:Produc4},
        {id:5,title:'elug unisex',price:980,img: Produc5},
        {id:6,title:'Casio Mtp-1302 unisex',price:340,img: Produc6},
    ],
    addedItems:[],

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
       

         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
          
                  }
        }
         else{
            addedItem.quantity = 1;
          
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
            }  
        }
    }

    if(action.type === REMOVE_ITEM){ 
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
            return{
                ...state,
                addedItems: new_items,
            }
    }
 
  else{
    return state
    }
    
}
export default cartReducer;
