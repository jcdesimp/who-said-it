import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ResponsePane from './ResponsePane';

import {
  loading,
  classifyResult,
  confidenceSelector
} from '../../selectors';

const ConnectedResponsePane = connect(
  () => ({}),
  () => ({})
)(ResponsePane);

export default ConnectedResponsePane;
