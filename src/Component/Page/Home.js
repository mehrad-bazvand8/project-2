import React from 'react';
import "../../App.css"
import Slider from "../Slideshow"
import Carousel from "../carousel" 
import SimpleTabs from "../categorytabs"
import Carousel2 from "../carousel2" 
function Home(){
    return(
        <>
        <Slider/>
        <Carousel/>
        <SimpleTabs/>
        <Carousel2/>
        </>
    )
}

export default Home