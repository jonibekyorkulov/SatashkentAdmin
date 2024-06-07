import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import { sidebarReducer } from "./sidebarReducer";

const reducers = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
})

export default reducers;