import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './header'
import Footer from './footer'
import tripCard from './tripCard'
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    
        <Header />
        <App />
        <tripCard/>
        <Footer/>
    </React.StrictMode>
);

// reportWebVitals();
// ReactDOM.render(<Header />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));