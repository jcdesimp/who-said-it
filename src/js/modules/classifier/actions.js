import { classifyMessage } from 'lib/classifierApi';
import * as actions from './actionTypes';

export function errorClassifyMessage(error) {
  return {
    type: actions.ERROR_CLASSIFY,
    error,
  };
}

export function successClassifyMessage(result) {
  return {
    type: actions.SUCCESS_CLASSIFY,
    result,
  };
}

export function requestClassifyMessage(msg) {
  return (dispatch) => {
    dispatch({
      type: actions.REQUEST_CLASSIFY,
    });
    classifyMessage(msg, (err, data) => {
      if (err) {
        return dispatch(errorClassifyMessage(err));
      }
      return dispatch(successClassifyMessage(data));
    });
  };
}

export function toggleDetail() {
  return {
    type: actions.TOGGLE_DETAIL,
  };
}
