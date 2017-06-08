import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ResponsePane from './ResponsePane';

import {
  loading,
  classifyResult
} from '../../selectors';

const ConnectedResponsePane = connect(
  createStructuredSelector({
    loading,
    results: classifyResult,
  }),
  () => ({})
)(ResponsePane);

export default ConnectedResponsePane;
