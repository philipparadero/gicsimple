import React from 'react';
import { RateData } from './RateData';
import Rates from './Rates';
import './RatesSection.css'

const RatesSection = () => {
   
    return (
        <section className='rate__section'>
            <div className="rate__section__container">
                <h1 className="rate__section__header">Today’s Best Guaranteed Investment Certificate Rates</h1>
                <div className="rates">
                {RateData.map((data, index)=>{
                    return (
                        <Rates
                            key={index}
                            isFlexRow={false}
                            header={data.year}
                            percent={data.percent}
                        />
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default RatesSection;
