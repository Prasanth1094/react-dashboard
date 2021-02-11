import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const button = (props) => (
    <div>
        <Button className="home-main" variant="contained" edge="end">
        {props.icon?<Icon color="primary">{props.icon}</Icon>:""}{props.text}
        </Button>
    </div>
)



export default button