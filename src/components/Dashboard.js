import React from 'react'
import Report from './Report'
import Screenshot from './Screenshot'
import ToDO from './To-Do'
import Divider from '@material-ui/core/Divider';
import { TimesheetContainer } from '../pages/Timesheet/containers';
import { Grid } from '@material-ui/core';
export default function Dashboard() {  
    return (
        <div>
            <Grid container spacing={3} className="dashboard-container">
                <Grid item xs={12} sm={12} md={8} className="timesheet-container">
                    <TimesheetContainer />
                </Grid>
                <Divider orientation="vertical" className="dashboard-verticalline contentverdivider" />
                 <Grid item xs={12} sm={12} md={4}>
                    <div > <Report /> </div> </Grid >
                <Grid item xs={12} sm={12} md={8} className="timesheet-container">
                    <ToDO />
                </Grid>
                <Divider orientation="vertical" className="dashboard-verticalline contentverdivider" />
                 <Grid item xs={12} sm={12} md={4}>
                    <div > <Screenshot /> </div> </Grid >
            </Grid>
            <hr></hr>           
        </div >
    )

}