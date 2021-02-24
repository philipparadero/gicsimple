import React from 'react'
import RatesSection from '../../RatesSection';
import Slider from '../../Slider';
import Offers from './Offers';
import SpecialPromo from './SpecialPromo';
// import '../../HeroSection'


function Home() {
    
    return (
        <>
            <Slider />
            <RatesSection />
            <SpecialPromo />
            <Offers />
        </>
    )
}

export default Home;
