import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {
    Feed,
    Header,
    Sidebar,
    ChannelDetails
} from '@components'

import './styles/app.scss'

export const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('JS');

    return (
        <BrowserRouter>
            <div>
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                <div className="container">
                    <Sidebar isSidebarOpen={isSidebarOpen} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <Routes>
                        <Route path="/" element={<Feed selectedCategory={selectedCategory} />} />
                        <Route path="/channel-details" element={<ChannelDetails />} />
                        <Route path="hm" element={<div> hm</div>} />
                        <Route path="/about" element={<div> about</div>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};