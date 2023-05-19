import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "../features/book/reducer";
import listReducer from "../features/list/reducer";
import thunk from "redux-thunk";

const initialState = [];

const store = createStore(
  combineReducers({
    book: bookReducer,
    list: listReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
