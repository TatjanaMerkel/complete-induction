import React from 'react';
import Home from "./components/Home/Home";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tutorial from './components/Tutorial/Tutorial';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

