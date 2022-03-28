import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./icecream/iceCreamReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer