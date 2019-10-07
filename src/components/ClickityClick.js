import React, { Component } from 'react';

export default class ClickityClick extends Component {

  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    console.log(1, this.state.hasBeenClicked)
    this.setState({
      hasBeenClicked: true
    }, () => console.log(2, this.state.hasBeenClicked));
    console.log(3, this.state.hasBeenClicked)
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked</p>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }

}
