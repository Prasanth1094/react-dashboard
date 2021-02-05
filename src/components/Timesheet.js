import React ,{ useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const bgcolours = ['#DCDBEA','#F5F1E3','#FAE9ED','#DFE9FA', '#FAEDE2'];
const colours = ['#5049A8','#C8AA57','#FE6389','#1F59BA', '#FE8B25'];
//  const getColour = () => colours[Math.floor(Math.random() * colours.length)];


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: 12
  },
});

const Timesheet = ({ getAllTimesheetAction, timesheets }) => {
  useEffect(() => {
    getAllTimesheetAction()
  }, [getAllTimesheetAction])
  
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className="Table-main" style={{ width: "1px !important" }}>
      <Table className={classes.table} aria-label="customized table">

        <TableHead style={{ backgroundColor: "blue !important" }}>
          <TableRow>
            <StyledTableCell align="left">Project</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Start time</StyledTableCell>
            <StyledTableCell align="left">Stop Time</StyledTableCell>
            <StyledTableCell align="left">Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timesheets && timesheets.map((row, index) => (            
            <StyledTableRow key={index}>
              <StyledTableCell align="left" >
              <span className="table-box" style={{backgroundColor: bgcolours[index], color: colours[index]}}>{row.projectcount}</span> &nbsp; &nbsp; {row.projectname}
              </StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>

              <StyledTableCell align="left">{row.starttime}</StyledTableCell>
              <StyledTableCell align="left">{row.stoptime}</StyledTableCell>
              <StyledTableCell align="left">{row.duration}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Timesheet


