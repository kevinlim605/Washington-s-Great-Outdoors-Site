import * as ActionTypes from './ActionTypes';

export const Climbing = (
  state = {
    isLoading: true,
    errMess: null,
    climbing: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CLIMBING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        climbing: action.payload,
      };
    case ActionTypes.CLIMBING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        climbing: [],
      };
    case ActionTypes.CLIMBING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
