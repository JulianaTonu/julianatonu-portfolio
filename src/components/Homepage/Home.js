import React from 'react';
import Contact from './Contact';
import Intro from './Intro';
import Project from './Project';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
           <Intro></Intro>
           <Project></Project>
           <Skills></Skills>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;