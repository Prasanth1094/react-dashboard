import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAllTimesheetAction } from '../../../state/actions/timesheet/index'
import Timesheet from '../../../components/Timesheet'


function timesheetListMapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getAllTimesheetAction: getAllTimesheetAction.STARTED
    },
    dispatch
  )
}

const timesheetListMapStateToProps = state => {
  const { timesheets } = state.timesheets;
  return {
    timesheets,
  };
};


export const TimesheetContainer = connect(timesheetListMapStateToProps, timesheetListMapDispatchToProps)(Timesheet)
