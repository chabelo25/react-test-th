import React, { useEffect } from 'react'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'
import { BackgroundImage } from './BackgroundImage/BackgroundImage'
import { InfoBox } from './InfoBox/InfoBox'
import { SearchBox } from './SearchBox/SearchBox'

export const Home = () => {
    return (
        <>
            <section className='home'>
                <BackgroundImage />
                <SearchBox />
                <InfoBox />
                <Footer />  
            </section> 
        </>
        
    )
}
