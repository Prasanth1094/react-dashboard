import React from 'react';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import more from '../Assets/more.png'
export default function SimpleCard() {
    const data = [
        { id: 1, name: "Revamp Instagram App", percent: "Today", Date: 20, month: "May" },
        { id: 1, name: "Prototyping", percent: "Upcomming", Date: 20, month: "May" },
        { id: 1, name: "Collect Reference for new Project", percent: "Upcomming", Date: 20, month: "May" },

    ];


    return (
        <div className="Todo-card-div">
            {data.map((user, index) => (
                <div>

                    {(index === 0 ?
                        (
                            <div>
                                <div className="Todo-Card-Date">
                                    <ListItemText style={{ color: "#382F9C",}} primary={user.Date} />
                                    <ListItemText style={{ color: "#382F9C",}} primary={user.month} />
                                </div>
                                <Card className="Todo-Card-content">
                                    <ListItem>
                                        <ListItemText primary={user.name} secondary={user.percent} className="screenshot-text Todo" />
                                        <img edge="end" src={more} alt=""/>
                                    </ListItem>
                                </Card>
                            </div>
                        )


                        : (
                            <div>
                                <div className="Todo-Card-Date"  >
                                    <ListItemText style={{ color: "#000000" }} primary={user.Date} />
                                    <ListItemText style={{ color: "#000000" }}  secondary={user.month} />
                                </div>
                                <Card className="Todo-Card-content">
                                    <ListItem style={{backgroundColor:"#F0F0F0"}} >
                                        <ListItemText primary={user.name} secondary={user.percent} />
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
