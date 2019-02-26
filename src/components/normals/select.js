import React from 'react'
import { connect } from 'react-redux'

import classes from './select.module.css'
import { languageSwitch } from '../../redux/actions'

const Select = ({ languages, currentIndex, _languageSwitch, className, id }) => {

    const _onLanguageChange = (event) => {
        const index = event.target.value
        console.log(index)
        _languageSwitch(index)
    }

    return (
        <select defaultValue={currentIndex}
            onChange={_onLanguageChange}
            className={`${classes.select} ${className}`}
            id={id}
        >
            <option value="" disabled>Ngôn Ngữ</option>
            {
                languages.map((item, idx) => (
                    <option value={idx} key={idx}>{item}</option>
                ))
            }
        </select>
    )
}

const mapStateToProps = (state) => {
    const { languages, currentIndex } = state.languageState
    return { languages, currentIndex }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _languageSwitch: (index) => {
            dispatch(languageSwitch(index))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select)