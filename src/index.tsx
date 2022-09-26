import React from 'react'
import { createRoot } from 'react-dom/client';
// import Button from '@mui/material/Button';

import { App } from './app'

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />)