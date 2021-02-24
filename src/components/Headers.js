import React from 'react'
import './Headers.css'

function Headers({children, isCenter}) {
    return (
        <div className={isCenter ? 'headers__container centered__line' : 'headers__container' }>
            {children}
        </div>
    )
}

export default Headers
