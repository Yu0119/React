import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  render(props) {
    <div>
      <h1>Hello {name} !</h1>
    </div>
  };
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;