import React from 'react';
import TransparentButton from '../components/ui/TransparentButton'
import Activity from '../Assets/graph.png'
import BlackTimesheet from '../Assets/timer_blue.png'
import pdf from '../Assets/pdf.png'
import Reportcard from '../components/ui/Report-card'
import { Grid } from '@material-ui/core';

export default function SimpleCard() {

    return (
        <div>
            <Grid container className="report-title-container " alignItems="center">
                <Grid item xs={8} className="timesheet-channel-name" > Report </Grid>
                
            </Grid>
            <div  className="Report-div">
                <div className="Report-card" >
                    <Reportcard  title="WEEKLY ACTIVITY" subTitle="52%" icon={Activity} bgcolor="#382f9c" textcolor="#9790DE" subtextcolor="white" arrowIcon="arrow_drop_up" iconbgcolor="#534ba9" arrowcolor="white" arrowbgcolor="#3cc186" border="1px solid #382f9c"/>
                    <Reportcard  title="WORKED THIS WEEK" subTitle="11:56:33" icon={BlackTimesheet} bgcolor="#F4F4F4" textcolor="#939393" subtextcolor="black" arrowIcon="arrow_drop_down" iconbgcolor="white" arrowcolor="#f42525" arrowbgcolor="#eecfcf" border="1px solid #e3e3e3"/>
                </div>
            <TransparentButton text="EXPORT AS PDF" icon={pdf} margin="13px 0 0 0px"/>
            </div>
            </div>
    );
}





// 524BAB
// white
// 3cc186 green
// EDD4D0 red bg


// E12D30 Red color
// E12D30 green color














































// <div>
// {(index === 0 ?
//     (
//         <Card className="" key={index} style={{ backgroundColor: "#3f51b5" }}>
//             <div>
//                 <ListItem>
//                     <div style={{ width: "40px", backgroundColor:"rgb(42, 63, 172)", margin: "0px 10px", padding:"3px 7px", borderRadius:"2px" }}>
//                         <ListItemAvatar>
//                             <img src={user.icon} alt="report"/>
//                         </ListItemAvatar>
//                     </div>
//                     <ListItemText primary={user.name} secondary={user.percent} style={{ fontWeight:"1px" }} />

//                     {(index === 0 ?
//                         (
//                             <Card edge="end" style={{ backgroundColor: "#39C084", width: "50px", height: "20px",  }} >
//                                <ArrowDropUpIcon style={{color:"white", margin:" -2px 6px 0 0", width:"20px"}}/>  <span style={{margin: "-108px 0 0 -9px", color:"white"}}>17%</span>
//                             </Card>)
//                         :
//                         (
//                             <Card edge="end" style={{ backgroundColor: "#EECFCF", width: "50px", height: "20px",  }} >
//                                <ArrowDropDownIcon style={{color:"#F42525", margin:" -2px 6px 0 0", width:"20px"}}/>   <span style={{margin: "-108px 0 0 -9px", color:"#F42525" }}>17%</span>
//                             </Card>)
//                     )}
//                 </ListItem>
//             </div>
//         </Card>
//     )
//     :
//     (
//         <Card className="" key={index} style={{ backgroundColor: "#F0F0F0" }}>
//             <div>
//                 <ListItem>
//                     <div style={{ width: "40px", backgroundColor:"#FFFFFF", margin: "0px 10px", padding:"3px 7px", borderRadius:"2px" }}>
//                     <ListItemAvatar>
//                         <img src={user.icon} alt=""/>
//                     </ListItemAvatar>
//                     </div>
//                     <ListItemText primary={user.name} secondary={user.percent} style={{ fontSize: "12px" }} />

//                     {(index === 0 ?
//                         (
//                             <Card  style={{ backgroundColor: "#39C084", width: "50px", height: "20px",  }} >
//                               <ArrowDropUpIcon style={{color:"white", margin:" -2px 6px 0 0", width:"20px"}}/>  <span style={{margin: "-108px 0 0 -9px", color:"white" }}>17%</span>
//                             </Card>)
//                         :
//                         (
//                             <Card style={{ backgroundColor: "#EECFCF", width: "50px", height: "20px",}} >
//                               <ArrowDropDownIcon style={{color:"#F42525", margin:" -2px 6px 0 0", width:"20px"}}/>   <span style={{margin: "-108px 0 0 -9px", color:"#F42525" }}>17%</span>
//                             </Card>)
//                     )}
//                 </ListItem>
//             </div>
//         </Card>
//     )


// )}

// </div>
// ))}
// <TransparentButton text="EXPORT AS PDF" icon={pdf} />