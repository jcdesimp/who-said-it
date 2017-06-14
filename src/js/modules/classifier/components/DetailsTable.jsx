import React from 'react';
import PropTypes from 'prop-types';

function makeRow(rowData) {
  return (
    <tr key={rowData.label}>
      <td>{rowData.label}</td>
      <td>{`${(rowData.probability * 100).toFixed(3)}%`}</td>
    </tr>
  );
}

const DetailsTable = (props) => {
  if (!props.results) {
    return (
      <div className="details-container no-data">
        <span>
          No Results!
        </span>
      </div>
    );
  }

  return (
    <div className="details-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(makeRow)}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;

DetailsTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      probability: PropTypes.number,
    })
  ),
};

DetailsTable.defaultProps = {
  results: null,
};
