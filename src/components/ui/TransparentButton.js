import React from 'react';
import Button from '@material-ui/core/Button';


const button = (props) => (

    <div>
      <div>
        <Button variant="outlined" size="medium" color="primary" className="MuiButton-outlinedPrimary">
        {props.icon?<img color="primary" className="transparent-buttonimage" src={props.icon} alt="icon"></img>:""}{props.text}
        </Button>
      </div>
    </div>
  )

button.propTypes = {

}

export default button
