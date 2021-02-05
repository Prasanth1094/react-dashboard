import { GET_ALL_TIMESHEET} from '../../types'


export const getAllTimesheetAction = {
  STARTED: () => ({ type: GET_ALL_TIMESHEET.STARTED}),
  FULLFILLED: (result) => ({ type: GET_ALL_TIMESHEET.FULLFILLED, payload: result}),
  REJECTED: () => ({ type: GET_ALL_TIMESHEET.REJECTED})
}
