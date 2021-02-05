/* eslint-disable no-constant-condition */
import { all } from 'redux-saga/effects'
import { watcherTimesheet } from '../../state/sagas/timesheet'

export default function * rootSaga () {
  const sagas = [
    watcherTimesheet()
  ]
  yield all(sagas)
}
