import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../app';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
