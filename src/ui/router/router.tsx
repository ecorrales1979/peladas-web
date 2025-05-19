import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home } from '../pages/home';
import { Login } from '../pages/login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
