import React from 'react';
import PropTypes from 'prop-types';
import MessageInput from '../MessageInput';
import ResponsePane from '../ResponsePane';


const ClassifierView = (props) => {
  const classNames = ['classifier-view'];


  if (props.confidence) classNames.push(props.confidence.confidence);

  return (
    <div className={classNames.join(' ')}>
      <div className="heading">
        <h1>Who Said It?</h1>
        <h2>{'Type a message and I\'ll try to guess who said it.'}</h2>
      </div>
      <MessageInput
        loading={props.loading}
        confidence={props.confidence}
      />
      <hr />
      <ResponsePane
        results={props.results}
        confidence={props.confidence}
      />
      <div className="detail-button-container">
        <button onClick={props.handleDetailToggle}>
          {`${props.showDetails ? 'Hide' : 'Show'} Details`}
        </button>
      </div>
      <hr className="detail-hr" />
      <div className="footer">
        Created By <a href="https://github.com/jcdesimp" target="_blank" rel="noopener noreferrer">Jcdesimp</a>.
      </div>
    </div>
  );
};


ClassifierView.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      probability: PropTypes.number,
    })
  ),
  loading: PropTypes.bool,
  confidence: PropTypes.shape({
    confidence: PropTypes.string,
    response: PropTypes.string,
  }),
  handleDetailToggle: PropTypes.func,
  showDetails: PropTypes.bool,
};

ClassifierView.defaultProps = {
  results: null,
  loading: false,
  confidence: null,
  handleDetailToggle: () => {},
  showDetails: false
};

export default ClassifierView;
