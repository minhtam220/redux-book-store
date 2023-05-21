import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import bookReducer from "../features/book/reducer";
//import listReducer from "../features/list/reducer";
import { bookSlice } from "../features/book/slice";
import { listSlice } from "../features/list/slice";

import thunk from "redux-thunk";

const initialState = [];

const store = createStore(
  combineReducers({
    book: bookSlice.reducer,
    list: listSlice.reducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
