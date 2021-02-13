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
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const data = [
    { id: 1, name: "shot_1_attach_1.png", icon: Picture, type: "image" },
    { id: 2, name: "shot_1_attach_3.png", icon: Picture, type: "image" },
    { id: 3, name: "screen Record_12.mov", icon: VideoCamera, type: "video" },
];

export default function InsetDividers() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className="screenshots-title-container " alignItems="center">
                <Grid item xs={8} className="timesheet-channel-name" > Screenshots </Grid>
            </Grid>
            {data.map((screenshot, index) => (
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <img src={screenshot.icon} alt="images" />
                        </ListItemAvatar>
                        <ListItemText primary={screenshot.name} />
                        {screenshot.type === "image" ? <ViewButton className="view-Button-text" screenshot={screenshot} text="view" bgcolor="rgba(225, 225, 225, 0.57)" color="#3f51b5" style={{ borderColor: "black" }} /> :
                            <ViewButton className="view-Button-text" text="Play" screenshot={screenshot} bgcolor="#3f51b5" color="white" />}
                    </ListItem>
                    <Divider className="screenshot-divider" component="li" />
                </List>
            ))}
            <TransparentButton text="VIEW ALL" margin="18px 0 0 15px" width="92%" />
        </div>
    );
}

