import * as ActionTypes from './ActionTypes';

export const Fishing = (
  state = {
    isLoading: true,
    errMess: null,
    fishing: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FISHING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        fishing: action.payload,
      };
    case ActionTypes.FISHING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        fishing: [],
      };
    case ActionTypes.FISHING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
