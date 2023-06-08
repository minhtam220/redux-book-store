import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
//import bookReducer from "../features/book/reducer";
//import listReducer from "../features/list/reducer";
import { bookSlice } from "../features/book/slice";
import { listSlice } from "../features/list/slice";

import thunk from "redux-thunk";

// Combine the reducers
const rootReducer = combineReducers({
  book: bookSlice.reducer,
  list: listSlice.reducer,
});

const initialState = [];

// Import individual reducer functions
const store = configureStore(
  combineReducers({
    reducer: rootReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
