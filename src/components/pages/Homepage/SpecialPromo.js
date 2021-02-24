import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../SignUp';
import { Button } from '../Buttons/Button';
import './SpecialPromo.css';


function SpecialPromo() {
    return (
        <section className='promo__section'>
            <div className="promo__container">
                <h1 className="promo__header">
                    Special Promotion – 6 Months Non-redeemable 0.90%
                </h1>
            </div>
            <SignUp />
        </section>
    )
}

export default SpecialPromo
