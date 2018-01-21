import React, { Component } from 'react'

class LayoutBasic extends Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ marginTop: '7em' }}>
        {this.props.children}
      </div>
    )
  }
}

export default LayoutBasic
