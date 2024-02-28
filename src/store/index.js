import { legacy_createStore as createStore, combineReducers } from "redux";

import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import {todosReducer} from "./TodosReducer.js";
import {userReducerPage} from "./useReducerPage.js";


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    todos: todosReducer,
    user2: userReducerPage
})

export const store = createStore(rootReducer);