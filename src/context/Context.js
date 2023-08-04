import {createContext, useContext, useReducer} from 'react'
import faker from  "faker";
import { cartReducer, productReducer } from './Reducers';

const Cart= createContext();
//  faker.send(99); //only renders one type of data and not changed

const Context = ({children}) => {
    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid (),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image (),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),


    }));
   const [state, dispatch] = useReducer(cartReducer,{
    products: products,
    cart : []
   });

   const [productState, productDispatch] = useReducer(productReducer,{
   byStock: false, //means not showing not in stock
   byFastDelivery : false,//means all delivery will be shown 
   byRating: 0,
   searchQuery: "",
   });

  return <Cart.Provider value={{state,dispatch , productState, productDispatch}}>{children}</Cart.Provider>;//this is our cart context
    

};

export default Context

export const CartState= ()=>{
    return useContext(Cart);
}

// in case you have a problem when you click the add to cart and the remove from cart and all items selected. There is an error in the case ADD TO CART, thanks to CHATOpenAI, the code: case 'ADD_TO_CART':
//             return {...state, cart:[...state.cart, {_id: action.payload.id, ...action.payload, qty: 1}]};

// inStock: Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)),

