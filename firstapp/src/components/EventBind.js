import React from 'react';

class EventBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: 'BE' };
    this.click = this.click.bind(this);
    // this.eventIgnore = this.eventIgnore.bind(this);
  }

  click() {
    // document.getElementsByClassName("button1").innerhtml = {this.state.university_name} Change course to {this.state.course}
    this.setState(
      this.state = {
        course: 'CSE',
        degree: 'BE${}',
        university_name: this.props.uni,
        msg: `This msg contains all other state properties course:${this.props.uni}degree`,
      },
    );
    console.log(this);
    console.log('clicked');
  }

  // eventIgnore(e){
  //     e.preventDefault();
  // }
  render() {
    return (
      <div>
        {/* <a href="https://www.google.com/" onClick={this.eventIgnore}>google</a> */}
        <button className="button1" onClick={this.click}>
          {' '}
          {this.state.msg}
        </button>
      </div>
    );
  }
}
export default EventBind;
