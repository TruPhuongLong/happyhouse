import React from 'react'

import classes from './elip-container.module.css'

import Elip from './elip'

export default () => {
    return (
        <div className={classes.wraper1}>
            <div className={classes.wraper2}>
                <Elip content="Safety" bgColor="rgba(132, 188, 0, 1)" style={{ margin: 'auto' }} />
                <div className={`d-flex justify-content-around ${classes.wraper3}`}>
                    <Elip content="Comfortable" bgColor="rgba(255, 192, 0, 1)" />
                    <Elip content="Funtional" bgColor="rgba(1, 233, 255, 1)" />
                </div>
            </div>
            <h4 style={{ color: 'var(--color-white)', textAlign: 'center' }}>
                please fill your text here
            </h4>
        </div>
    )
}