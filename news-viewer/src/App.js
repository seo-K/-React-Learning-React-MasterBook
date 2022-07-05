import React from 'react';
import { Routes, Route } from '../node_modules/react-router-dom/index';
import NewsPage from './pages/NewsPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<NewsPage />} />
        </Routes>
    );
}
