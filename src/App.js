import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ConsultaPage from './pages/ConsultaPage';
import CadastroPage from './pages/CadastroPage';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/consulta" element={<ConsultaPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </div>
  );
};

export default App;
