import React, { PureComponent } from 'react';
import { connect } from '../../../src';

class Comp extends PureComponent {
  render() {
    console.log(this.props);
    return <div>ABC</div>;
  }
}

export default connect()(Comp);
