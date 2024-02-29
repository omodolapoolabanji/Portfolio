import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills'
import '../styles/main.css'
import Contact from './components/Contact';
import Scroller from './components/scroller';

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
