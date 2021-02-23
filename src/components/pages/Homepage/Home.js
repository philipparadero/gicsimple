import React from 'react'
import '../../HeroSection'
import RatesSection from '../../RatesSection';
import Slider from '../../Slider';
import {RateData} from '../../RateData'

function Home() {
    console.log("data", RateData);
    return (
        <>
            <Slider />
            <RatesSection />
        </>
    )
}

export default Home;
