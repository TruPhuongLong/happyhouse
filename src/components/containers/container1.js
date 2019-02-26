import React from 'react'
import { withRouter } from 'react-router-dom'

import classes from './container1.module.css'

import {
    Sidebar,
    Content,
} from '../layouts'



const Container = (props) => {
    const { pathname } = props.location
    return (
        <div className={`${pathname === '/home' && classes.container}`}>
            <Sidebar className={classes.sidebar} id="sidebar" />
            <Content id="content" className={classes.content} />
        </div>
    )
}

export default withRouter(Container)