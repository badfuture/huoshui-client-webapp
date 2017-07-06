import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'moment/locale/zh-cn'
import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
import localStore from 'store'
import axios from 'axios'
import moment from 'moment'
import { DOMAIN } from '../constants/ApiEndpoints'
import configStore from './AppStore'
import AppLayout from '../components/layout/AppLayout'
import PageNotFound from '../components/page/PageNotFound'
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
import ScrollToTop from '../config/AppScrollToTop'
import Pace from '../components/progress/pace'

// set global config for Http requests
axios.defaults.baseURL = DOMAIN
axios.defaults.headers.post['Content-Type'] = 'application/json'
const token = localStore.get('token')
if (localStore.get('token')) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// set top progress bar
Pace.start()

// set global locale for time
moment().locale('zh-cn')

// set store singleton for Redux
const store = configStore()
// not supporting localstore yet, will be lots of bugs!!
// persistStore(store)

const AppRoutes = () => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <ScrollToTop>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/profs/:id" component={ProfDetailContainer} />
            <Route path="/courses/:id" component={CourseDetailContainer} />
            <Route exact path="/reviews" component={ReviewContainer} />
            <Route path="/reviews/:id" component={ReviewDetailsContainer} />
            <Route exact path="/new-review" component={AddReviewContainer} />
            <Route exact path="/rankings" component={RankContainer} />
            <Route path="/rankings/:id" component={RankDetailsContainer} />
            <Route path="/kelists" component={KelistContainer} />
            <Route exact path="/depts" component={DeptsContainer} />
            <Route path="/depts/:id" component={DeptDetailContainer} />
            <Route path="/my-review" component={MyReviewContainer} />
            <Route path="/my-kelist" component={MyKelistContainer} />
            <Route path="/my-prof" component={MyProfContainer} />
            <Route path="/my-reply" component={MyReplyContainer} />
            <Route path="/my-profile" component={MyProfileContainer} />
            <Route path="/feedback" component={FeedbackContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </AppLayout>
      </ScrollToTop>
    </Router>
  </Provider>
)

export default AppRoutes
