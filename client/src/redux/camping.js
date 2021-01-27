import * as ActionTypes from './ActionTypes';

export const Camping = (
  state = {
    isLoading: true,
    errMess: null,
    camping: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        camping: action.payload,
      };
    case ActionTypes.CAMPING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        camping: [],
      };
    case ActionTypes.CAMPING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
