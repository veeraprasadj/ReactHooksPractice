import React, { Component } from 'react'

export default class RegularCompo extends Component {
  render() {
    console.log('Regular Component');
    return (
      <div>RegularCompo {this.props.name}</div>
    )
  }
}
