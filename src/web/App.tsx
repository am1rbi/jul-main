import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FunnelProvider } from './FunnelContext';
import LandingPage from './LandingPage';
import FunnelModal from './FunnelModal';
import AdminPage from './AdminPage';

const App: React.FC = () => {
  return (
    <FunnelProvider>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </FunnelProvider>
  );
};

export default App;