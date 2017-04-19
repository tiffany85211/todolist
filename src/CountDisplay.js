import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountDisplay extends Component {
  render() {
    return (
      <div className="countDisplay">
        <p> Todo: {this.props.countTodo} things left
          <br /> Done: {this.props.countDone} things checked</p>
      </div>
    );
  }
}

CountDisplay.propTypes = {
  countTodo: PropTypes.number.isRequired,
  countDone: PropTypes.number.isRequired,
};

export default CountDisplay;
