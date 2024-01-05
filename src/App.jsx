import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
import Contact from './components/Contact/Contact';
import './App.styles.css'

function App() {
    return (
        <div className="App">
            < Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
