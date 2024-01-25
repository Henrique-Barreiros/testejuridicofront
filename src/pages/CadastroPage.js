import React, { useState } from 'react';
import './CadastroPage.css';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://localhost:3010/clientes/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          x,
          y,
        }),
      });

      if (response.ok) {
        console.log('Cliente cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar cliente');
      }
    } catch (error) {
      console.error('Erro ao realizar requisição:', error);
    }
  };

  return (
    <div className="container">
      <h1>Página de Cadastro</h1>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <label>
          Valor de X:
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
        <label>
          Valor de Y:
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;
