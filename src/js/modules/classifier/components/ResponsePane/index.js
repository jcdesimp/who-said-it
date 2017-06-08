import { connect } from 'react-redux';
import ResponsePane from './ResponsePane';

const ConnectedResponsePane = connect(
  () => ({}),
  () => ({}),
)(ResponsePane);

export default ConnectedResponsePane;
