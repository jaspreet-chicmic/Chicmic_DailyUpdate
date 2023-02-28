import React from 'react';
// import {forConstant} from forConstant
class SubscribeState extends React.Component {
  constructor() {
    super();
    this.state = { msg: 'subscribe pls' };
  }

  subscribe() {
    this.setState(
      this.state = { msg: 'Thanks', newMsg: 'Welcome' },
    );
  }

  render() {
    return (
      <div>
        <h3>
          state msg:
          {this.state.msg}
        </h3>
        <button onClick={() => this.subscribe()}>subscribe</button>
      </div>
    );
  }
}
export default SubscribeState;
