import React from 'react'
import { createRoot } from 'react-dom/client';
import { App } from './app'

import './styles/styles.css'

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />)