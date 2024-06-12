export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';

//accion para agregar al carrito
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//para eliminar la accion 
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}