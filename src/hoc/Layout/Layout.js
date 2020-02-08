import React, {Component} from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component  {
    state = {
        sideDrawerAbierto: false
    }
    sideDrawerHandler = () => {
        this.setState({sideDrawerAbierto: false})
    }    

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {sideDrawerAbierto: !prevState.sideDrawerAbierto}
        })
    }
    render(){
       
        return(
            <Auxiliary>
                <Toolbar activar={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.sideDrawerAbierto}
                closed={this.sideDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
            )
        
    }

}

export default Layout