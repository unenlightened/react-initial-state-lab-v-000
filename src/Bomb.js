import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(state) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {


   return (
     <div></div>
   )
 }

}
