import React, { Component } from 'react';
import { observe } from '../../../src';

class App extends Component {
  data = {
    _count: 0,
    count: 0
  };

  constructor(props) {
    super(props);
    console.log(this.context, this.props, this.state);
  }

  componentDidCatch() {
    console.error('componentDidCatch');
  }
  componentDidMount() {
    console.error('componentDidMount');
  }
  componentDidUpdate() {
    console.error('componentDidUpdate');
  }
  componentWillMount() {
    console.error('componentWillMount');
  }
  componentWillReceiveProps() {
    console.error('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.error('componentWillUnmount');
  }
  componentWillUpdate() {
    console.error('componentWillUpdate');
  }
  shouldComponentUpdate() {
    console.error('shouldComponentUpdate');
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
          Current Value <span>{this.data.count}</span>
        </p>
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
