import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class AppRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { component: Component, layout: Layout, ...rest } = this.props

    return (<Route
      {...rest} render={props => (
        <Layout>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />)
  }
}

export default AppRoute
