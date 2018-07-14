import React from 'react';
import { Context } from './Context';

export function connect(params) {
  return function(Component) {
    //
    return class extends React.Component {
      render() {
        return (
          <Context.Consumer>
            {store => {
              return <Component {...store} />;
            }}
          </Context.Consumer>
        );
      }
    };
  };
}
