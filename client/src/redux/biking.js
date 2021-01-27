import * as ActionTypes from './ActionTypes';

export const Biking = (
  state = {
    isLoading: true,
    errMess: null,
    biking: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BIKING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        biking: action.payload,
      };
    case ActionTypes.BIKING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        biking: [],
      };
    case ActionTypes.BIKING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
