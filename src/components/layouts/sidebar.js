import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

import styles from './sidebar.module.css'
import Divider from '../normals/divider'

const categories = [
    {
        id: 'happyhouse',
        children: [
            { id: 'Trang Chủ', to: '/home', icon: <i className="material-icons md-14">home</i> },
            { id: 'Thông Tin Công Ty', to: '/about', icon: <i className="material-icons md-14">info</i> },
            { id: 'Hoạt Động Kinh Doanh', to: '/business', icon: <i className="material-icons md-14">business</i> },
            { id: 'Liên Hệ', to: '/contact', icon: <i className="material-icons md-14">contacts</i> },
        ],
    }
];

export default class extends React.Component {

    state = {
        activeItemIndex: 0
    }

    _onClick = (idx) => {
        this.setState({ activeItemIndex: idx })
        $('#sidebar').toggleClass('active')
    }

    render() {
        const { style, className, id } = this.props
        return (
            <div style={style} className={`${styles.sidebar} ${className}`} id={id}>
                <div className={styles.sidebarHeader}>
                    <img src="logo-happy-house2.png" />
                </div>
                <Divider />
                <div className={styles.sidebarContent}>
                    {categories.map(({ id, children }, _, arr) => (
                        <React.Fragment key={id}>
                            {
                                arr.length > 1 ?
                                    <h6>{id}</h6>
                                    : null
                            }

                            {children.map(({ id: childId, to, icon }, idx) => (
                                <Link to={to}
                                    className={`${styles.item} ${idx === this.state.activeItemIndex ? styles.itemActive : null}`}
                                    onClick={() => this._onClick(idx)}
                                    key={idx}
                                >{icon} {childId}</Link>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}