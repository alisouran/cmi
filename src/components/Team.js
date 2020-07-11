import React, { Fragment } from 'react'
import { Footer } from './other/Footer'

const Team = (props) => {
    const isTabletOrMobileDevice = props.isTabletOrMobileDevice
    return (
        <Fragment>
            <h1>Team</h1>
            <Footer />
        </Fragment>
    )
}

export default Team
