import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../redux/reducers/authReducer";
import { serviceReducer } from "./reducers/serviceReducer";


const reducers = combineReducers({
   auth: authReducer,
   service: serviceReducer,
   });
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
