import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(state) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {


   return (
     <div></div>
   )
 }

}
