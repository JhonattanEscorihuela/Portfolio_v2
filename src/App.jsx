import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import './App.styles.css'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path='/' element={<MainContent />} />
                <Route path='/experienceWork' element={<Experience />} />
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
