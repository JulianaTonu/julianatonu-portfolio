import React from 'react';
import Contact from './Contact';
import Intro from './Intro';
import Project from './Project';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
           <Intro></Intro>
           <Project></Project>
           <Skills></Skills>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;