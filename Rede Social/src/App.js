import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import FeedPage from './pages/feed';
import NotFoundPage from './pages/not-found';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

import { UserContext } from './auth';

export default function App(){
    const { currentUser } = React.useContext(UserContext);

    if(!currentUser){
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" replace />}/>
            </Routes>
        </BrowserRouter>
        );
    }
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/explorer" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>);

}