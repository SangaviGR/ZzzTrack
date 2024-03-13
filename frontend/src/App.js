import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import

import SplashScreen from './components/SplashScreen';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import NewUserLogin from './components/NewUserLogin';
import OldUserLogin from './components/OldUserLogin';

const App = () => {
    return (
        <Router>
            <Routes> 
                <Route exact path="/" element={<SplashScreen />} />
                <Route exact path="/signup" element={<SignupPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/new-entry" element={<NewUserLogin />} />
                <Route exact path="/old-entries" element={<OldUserLogin />} />
            </Routes> 
        </Router>
    );
};

export default App;
