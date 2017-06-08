import React from 'react';
import PropTypes from 'prop-types';

const ResponsePane = (props) => {
  if (props.loading) {
    return (
      <div>
        <span>
          {'Hmmm.....'}
        </span>
      </div>
    );
  }

  if (!props.results) {
    return (
      <div>
        <span>
          {'Type a message and I\'ll try to guess who said it!'}
        </span>
      </div>
    );
  }

  const resultClasses = props.results.sort(
    (a, b) => (a.probability - b.probability)
  ).reverse();

  const mostLikely = resultClasses[0];

  return (
    <div>
      <span>
        {`I'm ${(mostLikely.probability * 100).toFixed(2)}% sure this is ${mostLikely.label}.`}
      </span>
    </div>
  );
};

ResponsePane.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      label: React.PropTypes.string,
      probability: React.PropTypes.number,
    })
  ),
  loading: React.PropTypes.bool,
};

ResponsePane.defaultProps = {
  results: null,
  loading: false,
};

export default ResponsePane;
