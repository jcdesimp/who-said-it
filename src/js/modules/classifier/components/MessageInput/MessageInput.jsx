import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitTimeout: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }


  render(props) {
    return (
      <textarea
        onChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default MessageInput;
