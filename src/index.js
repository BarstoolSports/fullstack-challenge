import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import './styles/tailwind.css';

const root = document.getElementById('app');

createRoot(root).render(<App />);
