import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import PageHome from '../components/PageHome'
import PageNotFound from '../components/PageNotFound'

class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={PageHome}/>
            <Route path="/home" component={PageHome}/>
            <Route component={PageNotFound}/>
          </Switch>
        </AppLayout>
      </Router>
    )
  }
}

export default AppRoutes
