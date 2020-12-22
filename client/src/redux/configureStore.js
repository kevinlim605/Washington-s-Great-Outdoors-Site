import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";
import { Activities } from "./activities";

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initialState
  );
  return store;
};