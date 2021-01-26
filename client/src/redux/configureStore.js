import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Activities } from "./activities";

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          activities: Activities,        
      }),
      applyMiddleware(thunk, logger)
  );

  return store;
};