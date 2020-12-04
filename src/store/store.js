import createSagaMiddleware from "redux-saga";
import locations from "../reducer";
import { fnwatcher } from "../saga/saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const store = configureStore({
//   rootReducers,
//   middleware: [...getDefaultMiddleware(), sagaMiddleware],
// });

const rootReducers = combineReducers({
  locations,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fnwatcher);

const actionCreator = (props) => props;

export { store, actionCreator };
