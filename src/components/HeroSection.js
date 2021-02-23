import React from 'react'
import { Link } from 'react-router-dom';    
import './HeroSection.css'
import { Button } from './pages/Buttons/Button';

function HeroSection({headline, paragraph, img, alt, buttonLabel}) {
    return (
        <>
            <div className="container">
                <div className="row home__hero-row">
                    <div className="col">
                        <h1 className="home__headline">{headline}</h1>
                        <p className="home__paragraph">{paragraph}</p>
                        <Link  className='home__button'to='/login'>  
                            <Button buttonStyle='btn--outline' buttonSize='btn--large'>{buttonLabel}</Button> 
                        </Link> 
                    </div>
                    <div className="col home__image">
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
