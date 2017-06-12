import React from 'react';
import MessageInput from './MessageInput';
import ResponsePane from './ResponsePane';

const ClassifierView = props => (
  <div className="classifier-view">
    <div className="heading">
      <h1>Who Said It?</h1>
      <h2>{'Type a message and I\'ll try to guess who said it.'}</h2>
    </div>
    <MessageInput />
    <ResponsePane />
  </div>
);

export default ClassifierView;
