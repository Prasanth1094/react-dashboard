import { call, takeLatest, put } from 'redux-saga/effects'

import { GET_ALL_TIMESHEET } from '../../types';
import Axios from 'axios';
import { getAllTimesheetAction } from '../../actions/timesheet';

function * getAllTimesheet () {
  try {
   // const uri = 'https://node-crud-api.herokuapp.com/timesheets';
    const uri =https://nodejs-crud-5eo1.onrender.com/timesheets;
    const timesheets = yield call(Axios.get, uri)    
    yield put(getAllTimesheetAction.FULLFILLED(timesheets.data))
  } catch (error) {
    console.log(error.msg)
  }
}

export function * watcherTimesheet () {
  yield takeLatest(GET_ALL_TIMESHEET.STARTED, getAllTimesheet)
  
}

export const sagas = [watcherTimesheet]
