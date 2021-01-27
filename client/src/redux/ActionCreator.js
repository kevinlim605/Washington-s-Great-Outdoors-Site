import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchActivities = () => (dispatch) => {
  dispatch(activitiesLoading());

  return fetch(baseUrl + 'directory')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((activities) => dispatch(addActivities(activities)))
    .catch((error) => dispatch(activitiesFailed(error.message)));
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

export const fetchHiking = () => (dispatch) => {
  dispatch(hikingLoading());

  return fetch(baseUrl + 'hiking')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((hikingLocations) => dispatch(addHiking(hikingLocations)))
    .catch((error) => dispatch(hikingFailed(error.message)));
};

export const hikingLoading = () => ({
  type: ActionTypes.HIKING_LOADING,
});

export const hikingFailed = (errMess) => ({
  type: ActionTypes.HIKING_FAILED,
  payload: errMess,
});

export const addHiking = (hikingLocations) => ({
  type: ActionTypes.ADD_HIKING,
  payload: hikingLocations,
});

export const fetchBiking = () => (dispatch) => {
  dispatch(bikingLoading());

  return fetch(baseUrl + 'biking')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((bikingLocations) => dispatch(addBiking(bikingLocations)))
    .catch((error) => dispatch(bikingFailed(error.message)));
};

export const bikingLoading = () => ({
  type: ActionTypes.BIKING_LOADING,
});

export const bikingFailed = (errMess) => ({
  type: ActionTypes.BIKING_FAILED,
  payload: errMess,
});

export const addBiking = (bikingLocations) => ({
  type: ActionTypes.ADD_BIKING,
  payload: bikingLocations,
});

export const fetchKayaking = () => (dispatch) => {
  dispatch(kayakingLoading());

  return fetch(baseUrl + 'kayaking')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((kayakingLocations) => dispatch(addKayaking(kayakingLocations)))
    .catch((error) => dispatch(kayakingFailed(error.message)));
};

export const kayakingLoading = () => ({
  type: ActionTypes.KAYAKING_LOADING,
});

export const kayakingFailed = (errMess) => ({
  type: ActionTypes.KAYAKING_FAILED,
  payload: errMess,
});

export const addKayaking = (kayakingLocations) => ({
  type: ActionTypes.ADD_KAYAKING,
  payload: kayakingLocations,
});

export const fetchFishing = () => (dispatch) => {
  dispatch(fishingLoading());

  return fetch(baseUrl + 'fishing')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((fishingLocations) => dispatch(addFishing(fishingLocations)))
    .catch((error) => dispatch(fishingFailed(error.message)));
};

export const fishingLoading = () => ({
  type: ActionTypes.FISHING_LOADING,
});

export const fishingFailed = (errMess) => ({
  type: ActionTypes.FISHING_FAILED,
  payload: errMess,
});

export const addFishing = (fishingLocations) => ({
  type: ActionTypes.ADD_FISHING,
  payload: fishingLocations,
});

export const fetchCamping = () => (dispatch) => {
  dispatch(campingLoading());

  return fetch(baseUrl + 'camping')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((campingLocations) => dispatch(addCamping(campingLocations)))
    .catch((error) => dispatch(campingFailed(error.message)));
};

export const campingLoading = () => ({
  type: ActionTypes.CAMPING_LOADING,
});

export const campingFailed = (errMess) => ({
  type: ActionTypes.CAMPING_FAILED,
  payload: errMess,
});

export const addCamping = (campingLocations) => ({
  type: ActionTypes.ADD_CAMPING,
  payload: campingLocations,
});

export const fetchClimbing = () => (dispatch) => {
  dispatch(climbingLoading());

  return fetch(baseUrl + 'climbing')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((climbingLocations) => dispatch(addClimbing(climbingLocations)))
    .catch((error) => dispatch(climbingFailed(error.message)));
};

export const climbingLoading = () => ({
  type: ActionTypes.CLIMBING_LOADING,
});

export const climbingFailed = (errMess) => ({
  type: ActionTypes.CLIMBING_FAILED,
  payload: errMess,
});

export const addClimbing = (climbingLocations) => ({
  type: ActionTypes.ADD_CLIMBING,
  payload: climbingLocations,
});
