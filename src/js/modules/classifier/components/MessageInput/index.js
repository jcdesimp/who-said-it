import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MessageInput from './MessageInput';
import {
  requestClassifyMessage
} from '../../actions';

const ConnectedMessageInput = connect(
  () => ({}),
  dispatch => ({
    submitMessage: msg => dispatch(requestClassifyMessage(msg)),
  })
)(MessageInput);

export default ConnectedMessageInput;
