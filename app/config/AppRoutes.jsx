import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'moment/locale/zh-cn'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import axios from 'axios'
import moment from 'moment'
import { DOMAIN } from '../constants/ApiEndpoints'
import configStore from './AppStore'
import AppLayout from '../components/layout/AppLayout'
import PageNotFound from '../components/page/PageNotFound'
import HomeContainer from '../containers/home/HomeContainer'
import ReviewContainer from '../containers/review/ReviewContainer'
import ReviewDetailsContainer from '../containers/review/ReviewDetailsContainer'
import RankContainer from '../containers/rank/RankContainer'
import RankDetailsContainer from '../containers/rank/RankDetailsContainer'
import KelistContainer from '../containers/kelist/KelistContainer'
import CategoriesContainer from '../containers/categories/CategoriesContainer'
import FeedbackContainer from '../containers/feedback/FeedbackContainer'
import MyReviewContainer from '../containers/review/MyReviewContainer'
import MyKelistContainer from '../containers/kelist/MyKelistContainer'
import MyProfContainer from '../containers/prof/MyProfContainer'
import MyReplyContainer from '../containers/reply/MyReplyContainer'
import MyProfileContainer from '../containers/profile/MyProfileContainer'

import {
  NEW_REVIEW,
} from '../constants/StateEnum'


// set global config for Http requests
axios.defaults.baseURL = DOMAIN
axios.defaults.headers.post['Content-Type'] = 'application/json'

// set global locale for time
moment().locale('zh-cn')

// set store singleton for Redux
const store = configStore()
// not supporting localstore yet, will be lots of bugs!!
// persistStore(store)

const AppRoutes = () => (
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/home" component={HomeContainer} />
          <Route exact path="/reviews" component={ReviewContainer} />
          <Route path="/reviews/:id" component={ReviewDetailsContainer} />
          <Route exact path="/rankings" component={RankContainer} />
          <Route path="/rankings/:id" component={RankDetailsContainer} />
          <Route path="/kelists" component={KelistContainer} />
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
