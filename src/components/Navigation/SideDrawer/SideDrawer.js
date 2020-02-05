import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'

import classes from './SideDrawer.css'
    
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
        console.log(attachedClasses)
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
        console.log(attachedClasses)
    }
    else{
        attachedClasses = [classes.SideDrawer, classes.Close]
    }
    return(
        
            <Auxiliary>
                <Backdrop backdrop={props.open} close={props.closed}/>
            
            <div className={attachedClasses.join(' ')}>
                
                <div className={classes.Logo}>
                <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
            </Auxiliary>
        
    )
}


export default sideDrawer