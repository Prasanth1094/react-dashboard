import React ,{ useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import Button from '../components/ui/ButtonTable'
import more from '../Assets/more.png'
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
      backgroundColor: "#f9f9f9",
    },
  },
}))(TableRow);


const bgcolours = ['#dcdbea','#f5f1e3','#FAE9ED','#DFE9FA', '#FAEDE2'];
const colours = ['#382f9c','#c3a246','#ff5a82','#3e70c5', '#fe891f'];
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
    <div>
    <Grid container className="timesheet-title-container" alignItems="center">
    <Grid item xs={8} className="timesheet-channel-name" > Timesheet </Grid>
    <Grid item xs={3} >
        < Button text="VIEW FULL SHEET" >
        </Button>
    </Grid >
    <Grid item xs={1} >
        < img className="dot-time" src={more} alt="" /> </Grid> </Grid >
    <TableContainer className="Table-main" style={{ width: "1px !important" }}>
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
    </div>
  )
}

export default Timesheet


