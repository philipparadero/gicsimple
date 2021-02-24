import React from 'react'
import Card from '../../Card';
import { OffersData } from './OffersData';
import './Offers.css';
import Headers from '../../Headers';

function Offers() {
    return (
        <section className='offers__container'>
            <Headers isCenter={true}>How does GIC Simple deliver higher yields</Headers>
            <div className='cards__container'>
            {OffersData.map((data, index)=>{
                return (
                    <Card 
                        img={data.img}
                        description={data.description}
                        alt={data.alt}
                        key={index}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default Offers
