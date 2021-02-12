import React, { Component } from 'react'
import Report from '../components/Report'
import Screenshot from '../components/Screenshot'
import ToDO from '../components/To-Do'
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
            <Grid container spacing={3} className="dashboard-container">
                <Grid item xs={12} sm={12} md={8} className="timesheet-container">
                    <TimesheetContainer />
                </Grid>
                <Divider orientation="vertical" className="home-verticalline contentverdivider" />
                 <Grid item xs={12} sm={12} md={4}>
                    <div > Report <Report /> </div> </Grid >
            </Grid>
            <hr></hr>
            <Grid container spacing={3} className="dashboard-container">
                <Grid item xs={12} sm={12} md={8} className="timesheet-container">
                    <ToDO />
                </Grid>
                <Divider orientation="vertical" className="home-verticalline contentverdivider" />
                 <Grid item xs={12} sm={12} md={4}>
                    <div > Report <Screenshot /> </div> </Grid >
            </Grid>
        </div >
    )

}