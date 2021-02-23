
import React, { useState } from 'react'
import HeroSection from './HeroSection';
import { DataNew } from './pages/Homepage/DataNew';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './Slider.css';


const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = DataNew.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current+1)
       
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    }

    return (
      <section className='slider'>
        {DataNew.map((data, index) =>{
                return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <HeroSection
                            paragraph={data.paragraph}
                            headline={data.headline}
                            img={data.img}
                            alt={data.alt}
                            buttonLabel={data.buttonLabel}
                        />
                    )}
                </div>
                );
            })
        }
        <div className="arrows">
            <FaArrowLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowRight className='right-arrow' onClick={prevSlide} />
        </div>
      </section>
    );
}

export default Slider;
