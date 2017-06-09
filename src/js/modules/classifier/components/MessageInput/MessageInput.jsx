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
      <div style={{width: '100%'}}>
        <textarea
          onChange={this.handleInputChange}
          value={this.state.value}
          style={{
            width: '100%',
            height: '200px',
            fontSize: '1.2em',
            resize: 'none',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={this.submitMessage}
          style={{ display: 'block', width: '100%', height: '50px' }}
        >
          Submit
        </button>
      </div>
    );
  }
}

MessageInput.propTypes = {
  submitMessage: PropTypes.func,
  loading: PropTypes.bool,
};

MessageInput.defaultProps = {
  submitMessage: () => {},
  loading: false,
};

export default MessageInput;
