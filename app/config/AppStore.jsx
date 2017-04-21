import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
)

export default configStore
