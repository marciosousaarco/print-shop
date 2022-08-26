import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../views/Login";
import { Container } from '../components/Container';
import { Dashboard } from '../views/Dashboard';
import { ListOrder } from '../views/Order';
import { RegisterOrder } from '../views/RegisterOrder';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<ListOrder />} />
          <Route path="/register-order" element={<RegisterOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
