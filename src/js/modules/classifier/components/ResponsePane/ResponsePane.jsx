import React from 'react';
import PropTypes from 'prop-types';

const ResponsePane = (props) => {
  if (props.loading) {
    return (
      <div className="response-pane">
        <span>
          {'Hmmm.....'}
        </span>
      </div>
    );
  }

  if (!props.results) {
    return (
      <div className="response-pane">
        <span>
          {'Type a message and I\'ll try to guess who said it!'}
        </span>
      </div>
    );
  }


  return (
    <div className="response-pane">
      <span dangerouslySetInnerHTML={{ __html: props.confidence.response }} />
    </div>
  );
};

ResponsePane.propTypes = {
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
};

ResponsePane.defaultProps = {
  results: null,
  loading: false,
  confidence: null,
};

export default ResponsePane;
