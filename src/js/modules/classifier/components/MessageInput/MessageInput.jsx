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


  render(props) {
    return (
      <div>
        <textarea
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        <button onClick={this.submitMessage}>Submit</button>
      </div>
    );
  }
}

MessageInput.propTypes = {
  submitMessage: PropTypes.func,
};

MessageInput.defaultProps = {
  submitMessage: () => {},
};

export default MessageInput;
