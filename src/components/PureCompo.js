import React, { PureComponent } from 'react'

export class PureCompo extends PureComponent {
  render() {
    console.log('Pure Component');
    return (
      <div>PureCompo {this.props.name}</div>
    )
  }
}

export default PureCompo