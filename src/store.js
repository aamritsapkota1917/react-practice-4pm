import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./REDUX/reducers/cartReducer";
import studentReducer from "./REDUX/reducers/studentReducer";

const reducer=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=legacy_createStore(reducer)

export default store 
