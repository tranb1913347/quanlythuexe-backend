import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { AccountReducer } from "../Reducers/AccountReducer";
import { ModalReducer } from "../Reducers/ModalReducer";
import { ManagerReducer } from "../Reducers/ManagerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AccountReducer,
  ModalReducer,
  ManagerReducer
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));