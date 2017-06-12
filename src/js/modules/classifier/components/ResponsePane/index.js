import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ResponsePane from './ResponsePane';

import {
  loading,
  classifyResult,
  confidenceSelector
} from '../../selectors';

const ConnectedResponsePane = connect(
  createStructuredSelector({
    loading,
    results: classifyResult,
    confidence: confidenceSelector,
  }),
  () => ({})
)(ResponsePane);

export default ConnectedResponsePane;
