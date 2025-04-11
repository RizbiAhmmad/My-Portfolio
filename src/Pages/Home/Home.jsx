import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { SnowfallContext } from "../../Snowfall/SnowfallContext";
import Snowfall from "../../Snowfall/Snowfall";
const Home = () => {
    const { isSnowfallActive } = useContext(SnowfallContext);
    return (
        <div> 
            <Snowfall isActive={isSnowfallActive} />         
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;