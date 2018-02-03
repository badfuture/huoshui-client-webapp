import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'moment/locale/zh-cn'
import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
import localStore from 'store'
import axios from 'axios'
import moment from 'moment'
import ReactGA from 'react-ga'
import { DOMAIN } from '../constants/ApiEndpoints'
import configStore from './AppStore'
import LayoutDefault from '../components/layout/LayoutDefault'
import LayoutBasic from '../components/layout/LayoutBasic'
import AppRoute from '../config/AppRoute'
import PageNotFound from '../components/page/PageNotFound'
import PageOauthSuccess from '../components/page/PageOauthSuccess'
import PageOauthError from '../components/page/PageOauthError'
import HomeContainer from '../containers/home/HomeContainer'
import ProfDetailContainer from '../containers/prof/ProfDetailContainer'
import CourseDetailContainer from '../containers/course/CourseDetailContainer'
import ReviewContainer from '../containers/review/ReviewContainer'
import ReviewDetailsContainer from '../containers/review/ReviewDetailsContainer'
import AddReviewContainer from '../containers/review/AddReviewContainer'
import RankContainer from '../containers/rank/RankContainer'
import RankDetailsContainer from '../containers/rank/RankDetailsContainer'
import KelistContainer from '../containers/kelist/KelistContainer'
import DeptsContainer from '../containers/dept/DeptsContainer'
import DeptDetailContainer from '../containers/dept/DeptDetailContainer'
import FeedbackContainer from '../containers/feedback/FeedbackContainer'
import MyReviewContainer from '../containers/review/MyReviewContainer'
import MyKelistContainer from '../containers/kelist/MyKelistContainer'
import MyProfContainer from '../containers/prof/MyProfContainer'
import MyReplyContainer from '../containers/reply/MyReplyContainer'
import MyProfileContainer from '../containers/profile/MyProfileContainer'
import Pace from '../components/progress/pace'

// set global config for Http requests
axios.defaults.baseURL = DOMAIN
axios.defaults.headers.post['Content-Type'] = 'application/json'
const token = localStore.get('token')
if (localStore.get('token')) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// set google analytics
ReactGA.initialize('UA-75590488-5')

// set top progress bar
Pace.start()

// set global locale for time
moment().locale('zh-cn')

// set store singleton for Redux
const store = configStore()

function Analytics(props) {
  ReactGA.set({ page: props.location.pathname + props.location.search })
  ReactGA.pageview(props.location.pathname + props.location.search)
  return null
}

const AppRoutes = () => (
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/" component={Analytics} />
        <Switch>
          <AppRoute exact path="/" layout={LayoutDefault} component={HomeContainer} />
          <AppRoute exact path="/home" layout={LayoutDefault} component={HomeContainer} />
          <AppRoute exact path="/profs/:id" layout={LayoutDefault} component={ProfDetailContainer} />
          <AppRoute exact path="/courses/:id" layout={LayoutDefault} component={CourseDetailContainer} />
          <AppRoute exact path="/reviews" layout={LayoutDefault} component={ReviewContainer} />
          <AppRoute exact path="/reviews/:id" layout={LayoutDefault} component={ReviewDetailsContainer} />
          <AppRoute exact path="/new-review" layout={LayoutDefault} component={AddReviewContainer} />
          <AppRoute exact path="/rankings" layout={LayoutDefault} component={RankContainer} />
          <AppRoute exact path="/rankings/:id" layout={LayoutDefault} component={RankDetailsContainer} />
          <AppRoute exact path="/kelists" layout={LayoutDefault} component={KelistContainer} />
          <AppRoute exact path="/depts" layout={LayoutDefault} component={DeptsContainer} />
          <AppRoute exact path="/depts/:id" layout={LayoutDefault} component={DeptDetailContainer} />
          <AppRoute exact path="/my-review" layout={LayoutDefault} component={MyReviewContainer} />
          <AppRoute exact path="/my-kelist" layout={LayoutDefault} component={MyKelistContainer} />
          <AppRoute exact path="/my-prof" layout={LayoutDefault} component={MyProfContainer} />
          <AppRoute exact path="/my-reply" layout={LayoutDefault} component={MyReplyContainer} />
          <AppRoute exact path="/my-profile" layout={LayoutDefault} component={MyProfileContainer} />
          <AppRoute exact path="/feedback" layout={LayoutDefault} component={FeedbackContainer} />
          <AppRoute exact path="/oauth_error" layout={LayoutBasic} component={PageOauthError} />
          <AppRoute exact path="/oauth_success" layout={LayoutBasic} component={PageOauthSuccess} />
          <AppRoute layout={LayoutDefault} component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default AppRoutes
