import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './Store'
import AppLayout from '../components/layout/AppLayout'
import PageNotFound from '../components/page/PageNotFound'
import HomeContainer from '../containers/home/HomeContainer'
import ReviewContainer from '../containers/ReviewContainer'
import RankingContainer from '../containers/RankingContainer'
import KelistContainer from '../containers/KelistContainer'
import CategoriesContainer from '../containers/CategoriesContainer'
import FeedbackContainer from '../containers/FeedbackContainer'
import MyReviewContainer from '../containers/MyReviewContainer'
import MyKelistContainer from '../containers/MyKelistContainer'
import MyProfContainer from '../containers/MyProfContainer'
import MyReplyContainer from '../containers/MyReplyContainer'
import MyProfileContainer from '../containers/MyProfileContainer'

const store = configStore()

const AppRoutes = () => (
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/home" component={HomeContainer} />
          <Route path="/review" component={ReviewContainer} />
          <Route path="/ranking" component={RankingContainer} />
          <Route path="/kelist" component={KelistContainer} />
          <Route path="/categories" component={CategoriesContainer} />
          <Route path="/my-review" component={MyReviewContainer} />
          <Route path="/my-kelist" component={MyKelistContainer} />
          <Route path="/my-prof" component={MyProfContainer} />
          <Route path="/my-reply" component={MyReplyContainer} />
          <Route path="/my-profile" component={MyProfileContainer} />
          <Route path="/feedback" component={FeedbackContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </AppLayout>
    </Router>
  </Provider>
)

export default AppRoutes
