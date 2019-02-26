import React from 'react'

import classes from './elip.module.css'

export default ({content = 'content', bgColor, style, className}) => (
    <div className={`${classes.elip} ${className}`} style={{backgroundColor: bgColor, ...style}}>
        <h6>{content}</h6>
    </div>
)