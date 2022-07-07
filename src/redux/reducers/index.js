import { combineReducers } from "redux";
import { Cart } from "./CartReducer";
import { CounterReducer } from "./CounterReducer";
import { ProductReducer } from "./ProductsReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
    counter: CounterReducer,
    usersList: userReducer,
    productList: ProductReducer,
    cartitems: Cart
})