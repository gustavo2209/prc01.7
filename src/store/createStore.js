import { applyMiddleware, createStore } from "redux";
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from "../reducers";

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : [];

export default createStore (
    reducers, applyMiddleware(thunk, ...middlewares)
)