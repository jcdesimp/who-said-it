import * as actions from './actionTypes';

const defaultState = {
  loading: false,
  classifyError: null,
  classifyResult: null,
  showDetails: false,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.REQUEST_CLASSIFY:
      return Object.assign({}, state, {
        loading: true,
      });
    case actions.SUCCESS_CLASSIFY:
      return Object.assign({}, state, {
        loading: false,
        classifyResult: action.result,
      });
    case actions.ERROR_CLASSIFY:
      return Object.assign({}, state, {
        loading: false,
        classifyResult: null,
        classifyError: action.error,
      });
    case actions.TOGGLE_DETAIL:
      return Object.assign({}, state, {
        showDetails: !state.showDetails,
      });
    default:
      return state;
  }
}
