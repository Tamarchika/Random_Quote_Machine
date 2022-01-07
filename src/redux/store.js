import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import quotesReducer from "./reducers";

export const store = createStore(quotesReducer, applyMiddleware(thunk));