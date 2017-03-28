import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import PageHome from '../components/PageHome'
import PageNotFound from '../components/PageNotFound'
import ReviewContainer from '../containers/ReviewContainer'
import RankingContainer from '../containers/RankingContainer'
import CategoriesContainer from '../containers/CategoriesContainer'
import SettingContainer from '../containers/SettingContainer'

class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={PageHome}/>
            <Route path="/home" component={PageHome}/>
            <Route path="/review" component={ReviewContainer}/>
            <Route path="/ranking" component={RankingContainer}/>
            <Route path="/categories" component={CategoriesContainer}/>
            <Route path="/my-setting" component={SettingContainer}/>
            <Route component={PageNotFound}/>
          </Switch>
        </AppLayout>
      </Router>
    )
  }
}

export default AppRoutes
