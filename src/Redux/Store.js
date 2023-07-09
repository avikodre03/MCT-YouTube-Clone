import { legacy_createStore as createStore, applyMiddleware } from "redux";
import MyReducer from "./Reducer";
import logger from 'redux-logger'

const MyStore = createStore(MyReducer, applyMiddleware(logger));

export default MyStore;
