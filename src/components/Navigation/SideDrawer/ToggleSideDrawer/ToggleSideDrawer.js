import React from 'react'
import classes from './ToggleSideDrawer.css'
const togleSideDrawer =(props) => (
    <div className={classes.DrawerToggle}onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
        </div>
)

export default togleSideDrawer