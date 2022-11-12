export const initialState={
basket:[],

};

//selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
//reduce will iterate through the basket and tally up the total
//tallies up baskets and all item prices and adds it up to a final amount.fancy for loop


const reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket, action.item],

            };
            case "REMOVE_FROM_BASKET":
             const index= state.basket.findIndex(
                (basketItem) =>basketItem.id === action.id
             );

             let newBasket = [...state.basket];

             if(index >=0){
                newBasket.splice(index, 1)

             } else{
                console.warn(`Can't remove product (id:${action.id} due to it not being in the basket)`)
             }
             return{
                ...state,
                basket:newBasket
             }

            default:
                return state;
    }
}

export default reducer;