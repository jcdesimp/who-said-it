import React from 'react';
import MessageInput from './MessageInput';
import ResponsePane from './ResponsePane';

const ClassifierView = props => (
  <div style={{width: '100%'}}>
    <MessageInput />
    <ResponsePane />
  </div>
);

export default ClassifierView;
