import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/MyWork/Portfolio';
// import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            {/* Aquí puedes usar los componentes importados */}
            < Header />
            <About />
            <Services />
            <Portfolio />
            {/* <Contact /> */}
        </div>
    );
}

export default App;
