import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import ExperienceTW from './components/Experience/ExperienceTW';
import Projects from './components/Projects/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.styles.css'

function App() {

    const location = useLocation();
    return (
        <div className="App">

            <Routes >
                <Route index element={<MainContent />} />
                <Route path='/experienceWork' element={<ExperienceTW />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    );
}

function MainContent() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
}




export default App;
