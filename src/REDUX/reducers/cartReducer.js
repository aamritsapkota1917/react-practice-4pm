// reducer vaneko initial state lai lera tesko value changegarni 
const initialData={
    cartCount: 0

}


// action vaneko function lai call  garna chaini parameter ho 
const cartReducer=(state=initialData ,action)=>{
switch(action.type){
case 'ADD_TO_CART':
    return{
        cartCount:++state.cartCount
    }
    case 'REMOVE_FROM_CART':
        return {
            cartCount:state.cartCount-=1 
        }
    default:
        return state
}
}


export default cartReducer