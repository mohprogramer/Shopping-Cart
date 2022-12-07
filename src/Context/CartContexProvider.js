import React , {useReducer} from 'react';

const initialState = {
    selectedItem : [],
    itemCounter : 0,
    total:0,
    checkout:false
}

const sumItem = item => {
    const itemCounter = item.reduce((total , product) => total + product.quantity, 0);
    const total = item.reduce((total , product) => total + product.quantity * product.price , 0)
    return {itemCounter , total};
}

const cartReducer = (state ,action) => {
    console.log(state)
     switch(action.type){
        case "ADD-ITEM":
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem),
                checkout:false
            }

        case "REMOVE-ITEM":
           const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id);
           return {
            ...state,
            selectedItem:[...newSelectedItem],
            ...sumItem(newSelectedItem)
           } 
       
           case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity ++;
            return {
                ...state,
                ...sumItem(state.selectedItem)
            }

            case "DECREASE":
                const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
                state.selectedItem[indexD].quantity--;
                return {
                    ...state,
                    ...sumItem(state.selectedItem)
                }
            
            case "CHECKOUT":{
                return{
                    selectedItem:[],
                    itemCounter: 0,
                    total:0,
                    checkout:true
                }
            }
            
            case "CLEAR":
                return{
                    selectedItem:[],
                    itemCounter: 0,
                    total:0,
                    checkout:false
                }

            default:
                return state;    

     }
}

export const cartContext = React.createContext();

const CartContexProvider = ({children}) => {

    const [state , dispatch] = useReducer(cartReducer , initialState)

    return (
        <cartContext.Provider value={{state , dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContexProvider;