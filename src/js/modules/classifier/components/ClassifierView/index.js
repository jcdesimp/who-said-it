import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ClassifierView from './ClassifierView';

import {
  loading,
  classifyResult,
  confidenceSelector,
  showDetailsSelector
} from '../../selectors';

import * as actions from '../../actions';

const ConnectedClassifierView = connect(
  createStructuredSelector({
    loading,
    results: classifyResult,
    confidence: confidenceSelector,
    showDetails: showDetailsSelector,
  }),
  dispatch => ({
    handleDetailToggle: () => dispatch(actions.toggleDetail()),
  })
)(ClassifierView);

export default ConnectedClassifierView;
