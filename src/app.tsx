import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import { Feed, Header } from '@components'

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Link to="/">Главная</Link>
                <Link to="/about">ЭБАУТ</Link>
                <Link to='/hm' >ХМММ</Link>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="*" element={<div> not found</div>} />
                    <Route path="hm" element={<div> hm</div>} />
                    <Route path="/about" element={<div> about</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};