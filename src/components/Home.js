import React, { Component } from 'react'
import Report from '../components/Report'
import Screenshot from '../components/Screenshot'
import ToDO from '../components/To-Do'
import Button from '../components/ui/ButtonTable'
import more from '../Assets/more.png'
import Divider from '@material-ui/core/Divider';
import { TimesheetContainer } from '../pages/Timesheet/containers';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={8} className="timesheet-container">
                    <Grid container className="timesheet-title-container" alignItems="center">
                        <Grid item xs={8} className="timesheet-channel-name" > TimeSheet </Grid>
                        <Grid item xs={3} >
                            < Button text="VIEW FULL SHEET" >
                            </Button>
                        </Grid >
                        <Grid item xs={1} >
                            < img className="dot-time" src={more} alt="" /> </Grid> </Grid >

                    {
                        /* <table>
                                            <tr>
                                                    <th className="timesheet-channel-name">TimeSheet</th>
                                                </tr>
                                                <th>
                                                    <div className="table-button-icon">
                                                        <Button text="VIEW FULL SHEET" >
                                                        </Button>
                                                    </div>
                                                </th>
                                            </table>
                                       
                                                <img className="dot-time" src={more} alt=""/> */
                    }
                    <TimesheetContainer />
                </Grid> <Grid item xs={12} sm={12} md={4}>
                    <div > Report <Report /> </div> </Grid >

            </Grid> </div >
    )

}