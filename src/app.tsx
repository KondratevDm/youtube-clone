import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Feed } from '@components'

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Feed />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};