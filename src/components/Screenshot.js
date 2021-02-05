import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

import TransparentButton from '../components/ui/TransparentButton'
import VideoCamera from '../Assets/video_camera.png'
import Picture from '../Assets/picture.png'
import ViewButton from '../components/ui/ViewButton'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const data = [
    { id: 1, name: "shot_1_attach_1.png", icon: Picture, type:"image" },
    { id: 2, name: "shot_1_attach_3.png", icon: Picture, type:"image"},
    { id: 3, name: "screen Record_12.mov", icon: VideoCamera, type:"video" },
];

export default function InsetDividers() {
    const classes = useStyles();

    return (
        <div>
            {data.map((user, index) => (
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={user.icon} alt="images" />
                        </ListItemAvatar>
                        <ListItemText primary={user.name} />
                        {user.name === true ? <ViewButton className="view-Button-text" text="view" /> :
                            <ViewButton className="view-Button-text" text="view" type={user.type} />}
                    </ListItem>
                    <Divider className="screenshot-devider" variant="inset" component="li" />
                </List>
            ))}
            <TransparentButton text="VIEW ALL"/>
        </div>
    );
}

