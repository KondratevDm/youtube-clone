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
    SearchVideos,
    Video,
    NotFound
} from '@components'

import './styles/app.scss'

export const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('JavaScript');

    return (
        <Router>
            <div>
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className="container">
                    <Sidebar isSidebarOpen={isSidebarOpen} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <Routes>
                        <Route path="/" element={<Feed selectedCategory={selectedCategory} />} />
                        <Route path="/search/:query/" element={<SearchVideos />} />
                        <Route path="/watch/:videoId" element={<Video />} />
                        <Route path="/channel/:channelId" element={<ChannelDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};