import * as ActionTypes from './ActionTypes';

export const Hiking = (
  state = {
    isLoading: true,
    errMess: null,
    hiking: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_HIKING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        hiking: action.payload,
      };
    case ActionTypes.HIKING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        hiking: [],
      };
    case ActionTypes.HIKING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
