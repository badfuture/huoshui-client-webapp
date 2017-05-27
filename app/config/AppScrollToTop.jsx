import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

let timeOut
const scrollTop = () => {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -50)
    timeOut = setTimeout(scrollTop, 15)
  } else clearTimeout(timeOut)
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
