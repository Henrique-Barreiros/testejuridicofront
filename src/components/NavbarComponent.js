import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <Link to="/consulta">Consulta</Link>
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
};

export default NavbarComponent;
