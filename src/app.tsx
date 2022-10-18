import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {
    Feed,
    Header,
    Sidebar,
    ChannelDetails,
    SearchVideos
} from '@components'

import './styles/app.scss'

export const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('JavaScript');

    return (
        <Router>
            <div>
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                <div className="container">
                    <Sidebar isSidebarOpen={isSidebarOpen} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <Routes>
                        <Route path="/" element={<Feed selectedCategory={selectedCategory} />} />
                        <Route path="/channel-details" element={<ChannelDetails />} />
                        <Route path="/hm" element={<div> hm</div>} />
                        <Route path="/search/:query/" element={<SearchVideos />} />
                        <Route path="*" element={<div> no match </div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};