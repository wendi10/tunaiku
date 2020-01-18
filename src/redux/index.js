import rootSaga from '../saga/index'
import CreateStore from './CreateStore'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import {} from ''

export const history = createBrowserHistory()

export default initialState => {
  const reducers = {

  }

  const rootReducer = { ...reducers, router: connectRouter(history) }

  return CreateStore(rootReducer, rootSaga, initialState, history)
}
