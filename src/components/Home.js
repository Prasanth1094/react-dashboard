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
import Paper from '@material-ui/core/Paper';

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
                <Grid item xs={12} sm={8}>
                <tr>
                            <th className="timesheet-channel-name">TimeSheet</th>
                        </tr>
                        <th>
                            <div className="table-button-icon">
                                <Button text="VIEW FULL SHEET" >
                                </Button>
                            </div>
                        </th>
                        <img className="dot-time" src={more} alt=""/>
                        <TimesheetContainer />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div>Report
                        <Report /></div>
                </Grid>
                
            </Grid>
        </div>
    )

}

