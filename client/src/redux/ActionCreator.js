import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchActivities = () => dispatch => {
    dispatch(activitiesLoading());

    return fetch(baseUrl + 'directory')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(activities => dispatch(addActivities(activities)))
        .catch(error => dispatch(activitiesFailed(error.message)));
};

export const activitiesLoading = () => ({
    type: ActionTypes.ACTIVITIES_LOADING,
  });
  
  export const activitiesFailed = (errMess) => ({
    type: ActionTypes.ACTIVITIES_FAILED,
    payload: errMess,
  });
  
  export const addActivities = (activities) => ({
    type: ActionTypes.ADD_ACTIVITIES,
    payload: activities,
  });
