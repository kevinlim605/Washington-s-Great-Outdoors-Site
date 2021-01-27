import * as ActionTypes from './ActionTypes';

export const Kayaking = (
  state = {
    isLoading: true,
    errMess: null,
    kayaking: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_KAYAKING:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        kayaking: action.payload,
      };
    case ActionTypes.KAYAKING_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        kayaking: [],
      };
    case ActionTypes.KAYAKING_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
