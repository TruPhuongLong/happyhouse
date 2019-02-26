import React from 'react'
import { withRouter } from 'react-router-dom'

import classes from './header.module.css'

const Header = (props) => {
    return (
        <div style={{padding: '20px 0'}}>
            <div className="d-flex justify-content-between">
                <h6>Please fill text here</h6>
                <h6>HAPPY HOUSE</h6>
            </div>
            <img src="/top_midasi.jpg" className={classes.img}/>
        </div>
    )
}

export default withRouter(Header)
