import React from 'react'
import { withRouter } from 'react-router-dom'

import classes from './header.module.css'

const Header = (props) => {
    console.dir(props)
    console.dir("")
    return (
        <div style={{padding: '20px 0'}}>
            <div className="d-flex justify-content-between">
                <h6>Please fill text here</h6>
                <h6>HAPPY HOUSE</h6>
            </div>
            <img src="/top_midasi.jpg" className={classes.img}/>
            {/* <br /> */}
            {/* <h6>{props.location.pathname}</h6> */}
        </div>
    )
}

export default withRouter(Header)
