import React, { Component } from 'react';

function respondData(data, self) {
  Object.defineProperty(data, 'count', {
    get() {
      return this._count;
    },
    set(v) {
      this._count = v;
      self.forceUpdate();
    }
  });
}

class App extends Component {
  data = {
    _count: 0,
    count: 0
  };

  constructor(props) {
    super(props);
    console.log(this.context, this.props, this.state);
    this.add = this.add.bind(this);
    respondData(this.data, this);
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

  add() {
    this.data.count += 1;
  }

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
          <button onClick={this.add}>+1</button>
        </p>
      </div>
    );
  }
}

export default App;
