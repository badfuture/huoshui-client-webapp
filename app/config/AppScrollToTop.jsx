import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const scrollTop = () => {
  window.scrollTo(0, 0)
}

class AppScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      scrollTop()
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(AppScrollToTop)
