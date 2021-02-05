import React from 'react'
import Button from '@material-ui/core/Button';

const button = (props) => (
    <div>
        {props.type === "image" ?
            <Button className="view-Button" variant="outlined" color="primary" size="small" >
                View
        </Button>
            :
            <Button style={{backgroundColor:"#3f51b5",color:"white"}}size="small" >
                Play
        </Button>
        }
    </div>


)

export default button