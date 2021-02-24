import React from 'react'
import { Link } from 'react-router-dom';    
import { Button } from '../Buttons/Button';
import './HeroSection.css'


function HeroSection({headline, paragraph, img, alt, buttonLabel}) {
    return (
        <>
            <div className="container">
                <div className="row home__hero-row">
                    <div className="col">
                        <h1 className="home__headline">{headline}</h1>
                        <p className="home__paragraph">{paragraph}</p>
                        <Link  className='home__button'to='/login'>  
                            <Button buttonSize='btn--large'>{buttonLabel}</Button> 
                        </Link> 
                    </div>
                    <div className="col home__image">
                        <img className='slider__image'src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
