import * as types from '../../types'


export default function (state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_TIMESHEET.FULLFILLED:
      return { ...state, timesheets: action.payload }
    default:
      return state
  }
}
