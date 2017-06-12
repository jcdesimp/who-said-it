import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ClassifierView from './ClassifierView';

import {
  loading,
  classifyResult,
  confidenceSelector
} from '../../selectors';

const ConnectedClassifierView = connect(
  createStructuredSelector({
    loading,
    results: classifyResult,
    confidence: confidenceSelector,
  }),
  () => ({})
)(ClassifierView);

export default ConnectedClassifierView;
