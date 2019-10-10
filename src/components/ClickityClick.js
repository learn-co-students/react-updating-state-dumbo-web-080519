// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component {
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'}</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
