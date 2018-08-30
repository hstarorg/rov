import React, { Component } from 'react';
import { observe } from '../../../src';
import Comp from './Comp';

class App extends Component {
  data = { _count: 0, count: 0 };
  constructor(props) {
    super(props);
    this.ob = observe(this, this.data);
  }

  componentDidCatch() {
    console.warn('componentDidCatch');
  }
  componentDidMount() {
    console.info('componentDidMount');
  }
  componentDidUpdate() {
    console.info('componentDidUpdate');
  }
  componentWillMount() {
    console.info('componentWillMount');
  }
  componentWillReceiveProps() {
    console.info('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.info('componentWillUnmount');
  }
  componentWillUpdate() {
    console.info('componentWillUpdate');
  }
  shouldComponentUpdate() {
    console.info('shouldComponentUpdate');
    return true;
  }

  plus = () => {
    this.data.count++;
  };
  minus = () => {
    this.data.count--;
  };

  startObserver = () => {
    this.stopObserver();
    this.ob = observe(this, this.data);
  };

  stopObserver = () => {
    this.ob && this.ob.unsubscribe();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Current Value <span>{this.data.count}</span> <br />
          Prop Value: {this.props.a}
        </p>
        <fieldset>
          <Comp />
        </fieldset>
        <p>
          <button onClick={this.startObserver}>Start Observer</button>
          <button onClick={this.stopObserver}>Stop Observer</button>
          <button onClick={this.plus}>+1</button>
          <button onClick={this.minus}>-1</button>
        </p>
      </div>
    );
  }
}

export default App;
