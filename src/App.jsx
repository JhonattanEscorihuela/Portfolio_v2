import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import ExperienceTW from './components/Experience/ExperienceTW';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

    const location = useLocation();
    return (
        <div className="App">

            <Routes >
                <Route index element={<MainContent />} />
                <Route path='/experienceWork' element={<ExperienceTW />} />
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

import './App.styles.css'

export default App;
