import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reflect-metadata';
import './index.css';
import { Router } from './ui/router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
