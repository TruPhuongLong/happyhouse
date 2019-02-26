import React from 'react'
import $ from 'jquery'

import classes from './navbar.module.css'
import Select from '../normals/select'

export default ({ id}) => {
    const _onClick = () => {
        $('#sidebar').toggleClass('active')
    }
    
    return (
        <nav className={classes.navbar} id={id}>
            <img src="./logo-happy-house2.png" className={classes.img} />
            <div className={classes.wraper}>
                <Select />
                <button onClick={_onClick}>
                    <i className="material-icons">menu</i>
                </button>
            </div>
        </nav>
    )
}
