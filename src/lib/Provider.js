import PropTypes from 'prop-types';
import React from 'react';
import { Context } from './Context';

export class Provider extends React.Component {
  static propTypes = { store: PropTypes.object };

  static defaultProps = {
    store: {}
  };

  render() {
    return <Context.Provider value={this.props.store}>{this.props.children}</Context.Provider>;
  }
}
