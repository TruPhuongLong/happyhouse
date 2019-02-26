import React from 'react'

import ElipContainer from '../normals/elip-container'
import HomeHeader from '../layouts/home-header'

export default () => {
    return (
        <div style={{
            height: '88vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <HomeHeader />
            <ElipContainer />
        </div>
    )
}