import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MessageInput from './MessageInput';
import {
  requestClassifyMessage
} from '../../actions';
import {
  loading
} from '../../selectors';

const ConnectedMessageInput = connect(
  createStructuredSelector({
    loading,
  }),
  dispatch => ({
    submitMessage: msg => dispatch(requestClassifyMessage(msg)),
  })
)(MessageInput);

export default ConnectedMessageInput;
