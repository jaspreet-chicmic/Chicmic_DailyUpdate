import React from 'react';

// props practice
// children multiple attribute usage
class Names extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hi
          {this.props.name}
          {' '}
          {this.props.lname}
          {' '}
        </h1>
        {this.props.children}
        {console.log(this.props)}
      </div>
    );
  }
}
export default Names;
