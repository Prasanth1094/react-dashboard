import React from 'react';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import more from '../Assets/more.png'
import { Grid } from '@material-ui/core';

export default function SimpleCard() {
    const data = [
        { id: 1, name: "Revamp Instagram App", percent: "Today", Date: 20, month: "May" },
        { id: 1, name: "Prototyping", percent: "Upcomming", Date: 21, month: "May" },
        { id: 1, name: "Collect Reference for new Project", percent: "Upcomming", Date: 22, month: "May" },

    ];


    return (
        <div className="Todo-card-div">
               <Grid container className="todo-title-container " alignItems="center">
                <Grid item xs={8} className="timesheet-channel-name" > To - Do lists </Grid>
            </Grid>
            {data.map((todo, index) => (
                <div key={index}>

                    {(index === 0 ?
                        (
                            <div>
                                <div className="Todo-Card-Date">
                                    <h5 style={{ color: "#382F9C" }} >{todo.Date} </h5>
                                    <ListItemText style={{ color: "#382F9C"}}>{todo.month} </ListItemText>
                                </div>
                                <Card className="Todo-Card-content">
                                    <ListItem>
                                        <ListItemText primary={todo.name} secondary={todo.percent} className="screenshot-text Todo" />
                                        <img edge="end" src={more} alt=""/>
                                    </ListItem>
                                </Card>
                            </div>
                        )


                        : (
                            <div>
                                <div className="Todo-Card-Date"  >
                                    <h5 style={{ color: "#000000"}}>{todo.Date}</h5> 
                                    <ListItemText style={{ color: "#000000", fontweight: "bolder" }} secondary={todo.month} />
                                </div>
                                <Card className="Todo-Card-content1">
                                    <ListItem style={{backgroundColor:"#F0F0F0"}} >
                                        <ListItemText primary={todo.name} secondary={todo.percent} className="screenshot-text"/>
                                        <img edge="end" src={more} alt=""/>
                                    </ListItem>
                                </Card>
                            </div>

                        )
                    )}

                </div>

            ))}
        </div>
    );
}
