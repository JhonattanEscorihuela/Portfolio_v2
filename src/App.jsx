import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
import Contact from './components/Contact/Contact';


import './App.styles.css'


function App() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (

        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <div className="App">
                <Header />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </div>
        </div>

    );
}

export default App;
