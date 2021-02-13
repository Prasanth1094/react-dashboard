import React from 'react'
import Button from '@material-ui/core/Button';

const button = (props) => (
    <div>
        <Button style={{ backgroundColor: props.bgcolor, color: props.color }} size="small" >
           {props.text}
        </Button>

    </div>


)

export default button