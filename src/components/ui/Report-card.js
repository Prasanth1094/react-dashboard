import React from 'react'
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Icon from '@material-ui/core/Icon';
const ReportCard = (props) => (
    <div style={{marginBottom:"23px"}}>
        <Card style={{ backgroundColor: props.bgcolor,border:props.border, color: props.textcolor, borderRadius: "10px",boxShadow:"none" }}>
            <div>
                <ListItem >
                    <div style={{backgroundColor:props.iconbgcolor,marginRight: "12px",padding: "10px",width: "44px",borderRadius: "6px"}} >
                        <ListItemAvatar>
                            <img src={props.icon} alt="report" />
                        </ListItemAvatar>
                    </div>
                    <ListItemText primary={props.title} secondary={
                        <h5 style={{ color: props.subtextcolor }}>{props.subTitle}</h5>} />
                    <Card edge="end" style={{backgroundColor:props.arrowbgcolor}} className="report-percent-card">
                        <Icon style={{color:props.arrowcolor, backgroundColor:props.arrowbgcolor}}>{props.arrowIcon}</Icon>
                        <span style={{color:props.arrowcolor, backgroundColor:props.arrowbgcolor, position:"relative", bottom:"7px", paddingRight: "6px" }}>17%</span>
                    </Card>
                </ListItem>
            </div>
        </Card>
    </div>
)
export default ReportCard