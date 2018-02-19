import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  render(props) {
    return(
      <div>
        <h1>Hello {this.props.name} !</h1>
      </div>
    );
  };
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

export default HelloWorld;
