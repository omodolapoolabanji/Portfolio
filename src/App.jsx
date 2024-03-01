import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx'
import '../styles/main.css'
import Contact from './components/Contact.jsx';
import Scroller from './components/scroller.jsx';

export default function App() {
    return (
        <>
        <Nav />
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Scroller/>
        
        </>
        
    );
}
