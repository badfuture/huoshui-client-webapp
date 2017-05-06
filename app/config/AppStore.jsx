import { compose, createStore, applyMiddleware } from 'redux'
import { autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  ),
)

export default configStore
