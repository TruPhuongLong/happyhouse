import React from 'react'
import classes from './home-header.module.css'

export default () => {
    return (
        <div className={classes.wraper1}>
            <div className={`${classes.wraper2}`} >
                <h5>please fill your text here</h5>
                <img src="/logo-happy-house2.png" />
            </div>
            <div className={`${classes.wraper3}`}>
                <h5>please fill your text here1</h5>
                <h5>please fill your text here</h5>
            </div>
        </div>
    )
}