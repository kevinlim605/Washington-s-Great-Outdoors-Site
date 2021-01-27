import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Activities } from './activities';
import { Hiking } from './hiking';
import { Biking } from './biking';
import { Kayaking } from './kayaking';
import { Fishing } from './fishing';
import { Camping } from './camping';
import { Climbing } from './climbing';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      activities: Activities,
      hiking: Hiking,
      biking: Biking,
      kayaking: Kayaking,
      fishing: Fishing,
      camping: Camping,
      climbing: Climbing,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
