import React from 'react';
import { Context } from './Context';

export function connect(options) {
  return function(Component) {
    return class extends React.Component {
      componentWillMount() {}
      componentWillUnmount() {}
      render() {
        return (
          <Context.Consumer>
            {store => {
              return <Component store={store} />;
            }}
          </Context.Consumer>
        );
      }
    };
  };
}
