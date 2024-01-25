import React, { useState, useEffect } from 'react';
import './ConsultaPage.css';

const ConsultaPage = () => {
  const [clientes, setClientes] = useState([]);

  const fetchClientes = async () => {
    try {
      const response = await fetch('http://localhost:3010/clientes/listar');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setClientes(data);
      } else {
        console.error('Erro ao buscar clientes');
      }
    } catch (error) {
      console.error('Erro ao realizar requisição:', error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="container">
      <h1>Página de Consulta</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id} className="cliente-item">
            <strong>{cliente.nome}</strong>
            <div className="cliente-info">
              <span>Email:</span> {cliente.email}
              <br />
              <span>Telefone:</span> {cliente.telefone}
              <br />
              <span>Coordenadas (X, Y):</span> ({cliente.x}, {cliente.y})
              <br />
              <span>Distância:</span> {cliente.distancia}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultaPage;
