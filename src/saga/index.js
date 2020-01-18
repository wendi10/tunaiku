import { fork, all } from 'redux-saga/effects'
import API from '../Services/Api'

const api = API.create()

function * clientSagas () {
  yield all([
  ])
}

export default function * rootSaga () {
  yield all([fork(clientSagas)])
}
