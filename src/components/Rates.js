import React from 'react'

function Rates({ header, percent, isFlexRow }) {
    return (
        <div className={isFlexRow ? 'rate__container flex_column' : 'rate__container'}>
            <div className={isFlexRow ? 'rate__header no__padding__header': 'rate__header'}>{header}</div>
            <div className="rate_percent">{percent}</div>
        </div>
    )
}

export default Rates
