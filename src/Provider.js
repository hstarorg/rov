import PropTypes from 'prop-types';
import React from 'react';

const Context = React.createContext(null);

export class Provider extends React.Component {
  static propTypes = { store: PropTypes.object };

  static defaultProps = {
    store: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <Context.Provider value={this.props.store}>{this.props.children}</Context.Provider>;
  }
}
