import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
//   noteList: noteListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
//   noteCreate: noteCreateReducer,
//   noteDelete: noteDeleteReducer,
//   noteUpdate: noteUpdateReducer,
//   userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userinfo")
  ? JSON.parse(localStorage.getItem("userinfo"))
  : null;

const initialState = {
  userLogin: { userinfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
