import React from 'react';
import "../../App.css"
import Slider from "../Slideshow"
import HomeSimpleSlider from "../HomeSimpleSlider" 
import SimpleTabs from "../categorytabs"
import Homebanners from "../Homebanners"
function Home(){
    return(
        <>
        <Slider/>
        <HomeSimpleSlider/>
        <SimpleTabs/>
        <Homebanners/>
        </>
    )
}

export default Home