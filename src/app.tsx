import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    // Link,
} from "react-router-dom";

import {
    Feed,
    Header,
    Navbar
} from '@components'



export const App: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(true);

    return (
        <BrowserRouter>
            <div>
                <Header setIsNavbarOpen={setIsNavbarOpen} isNavbarOpen={isNavbarOpen} />
                <div style={{ display: 'flex' }}>
                    <Navbar isNavbarOpen={isNavbarOpen} />
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="*" element={<div> not found</div>} />
                        <Route path="hm" element={<div> hm</div>} />
                        <Route path="/about" element={<div> about</div>} />
                    </Routes>
                </div>
                {/* <Link to="/">Главная</Link>
                <Link to="/about">ЭБАУТ</Link>
                <Link to='/hm' >ХМММ</Link> */}
                {/* <Routes> */}
                {/* <Route path="/" element={<Feed />} />
                    <Route path="*" element={<div> not found</div>} />
                    <Route path="hm" element={<div> hm</div>} />
                    <Route path="/about" element={<div> about</div>} /> */}
                {/* </Routes> */}
            </div>
        </BrowserRouter>
    );
};