import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { content } from "./reducer";
import { search } from "./reducer";
import { searchedItems } from "./reducer";
import { pageNumber } from "./reducer";


const myReducers = combineReducers({
    content:content,
    search:search,
    qty:searchedItems,
    currentPage: pageNumber
})

const middleware = [thunk]
const store = createStore(myReducers, applyMiddleware(...middleware))


export default store;