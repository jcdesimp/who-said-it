import React from 'react';
import PropTypes from 'prop-types';

class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitTimeout: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage() {
    if (this.state.submitTimeout) {
      clearTimeout(this.state.submitTimeout);
    }

    this.props.submitMessage(this.state.value);
  }

  handleInputChange(event) {
    if (this.state.submitTimeout) {
      clearTimeout(this.state.submitTimeout);
    }

    this.setState({
      value: event.target.value,
      submitTimeout: setTimeout(this.submitMessage, 1000),
    });
  }


  render() {
    const classNames = [];

    if (this.props.confidence) classNames.push(this.props.confidence.confidence);

    return (
      <div className="message-input-container">
        <div className="message-input">
          <textarea
            className={classNames.join(' ')}
            placeholder="Type a message..."
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

MessageInput.propTypes = {
  submitMessage: PropTypes.func,
  loading: PropTypes.bool,
  confidence: PropTypes.shape({
    confidence: PropTypes.string,
    response: PropTypes.string,
  }),
};

MessageInput.defaultProps = {
  submitMessage: () => {},
  loading: false,
  confidence: null,
};

export default MessageInput;
