import React from 'react'
import $ from 'jquery'

import classes from './container1.module.css'

import {
    Sidebar,
    Content,
} from '../layouts'



export default () => {
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
    return (
        <div className={`${classes.container}`}>
            <Sidebar className={classes.sidebar}/>
            <Content className={classes.content}/>
        </div>

        // <div >
        //     <Sidebar  />
        //     <Content  />
        // </div>
    )
}