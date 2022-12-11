import { combineReducers } from "redux";
import { serviceReducer } from './service';
import { calculationReducer } from './calculation'
export const rootReducer = combineReducers({
    serviceReducer,
    calculationReducer
})