export const cartReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state , cart :[...state.cart , {...action.payload, qty:1}]};
            case 'REMOVE_FROM_CART':
                return {...state , cart :state.cart.filter((c)=> c.id!== action.payload.id),
                };

                //lets add another functionality of change cart quantity in reducers
                case "CHANGE_CART_QTY":
                    return{
                        ...state, //destructing the cart quantity
                        cart: state.cart.filter((c)=>
                        c.id === action.payload.id ? (c.qty= action.payload.qty) : c.qty
                        ),
                    };
        default:
            return state;// { ... is the destructering in the state}
}
};//payload is that we want to put in the state and change in the state which is in action 

export const productReducer= (state, action)=>{
    switch(action.type){
        case "SORT_BY_PRICE":
            return{...state , sort: action.payload};
            case "FILTER_BY_STOCK":
            return{...state , byStock: !state.byStock};
            case "FILTER_BY_DELIVERY":
            return{...state , byFastDelivery: !state.byFastDelivery};
            case "FILTER_BY_RATING":
            return{...state , byRating: action.payload};
            case "CLEAR_FILTERS":
            return{
                byStock: false,
                byFastDelivery:false,
                byRating: 0,
                searchQuery: "",
            };
    
default:
    return state;
    }  
};