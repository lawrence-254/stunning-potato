// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import DashboardModule from './pages/DashboardModule';
import SchoolModule from './pages/SchoolModule';
import SchoolDetails from './pages/SchoolDetails';
import NewInvoice from './pages/NewInvoice';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<DashboardModule />} />
          <Route path="schools" element={<SchoolModule />} />
          <Route path="schools/:id" element={<SchoolDetails />} />
          <Route path="/schools/:id/invoices/new" element={<NewInvoice />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
