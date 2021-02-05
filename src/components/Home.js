import React, { Component } from 'react'
import Report from '../components/Report'
import Screenshot from '../components/Screenshot'
import ToDO from '../components/To-Do'
import Button from '../components/ui/ButtonTable'
import more from '../Assets/more.png'
import Divider from '@material-ui/core/Divider';
import { TimesheetContainer } from '../pages/Timesheet/containers'

class Home extends Component {
        render() {
        return (
            <div>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8 col-sm-12" style={{ margin: "-30 0 0 0" }} >
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
                    </div>

                    <Divider orientation="vertical" className="home-verticalline contentverdivider" />

                    <div className="col-12 col-md-4 col-sm-12">
                        Report
                        <Report />
                    </div>
                </div>
                <hr></hr>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8 col-sm-12">
                        To-Do List
                        <ToDO />
                    </div>
                    <div className="col-12 col-md-4 col-sm-12">
                        Screenshots
                        <Screenshot />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home