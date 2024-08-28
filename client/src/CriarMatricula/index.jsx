import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMatricula() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [armazenamento, setArmazenamento] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { nome, preco, armazenamento };

    try {
      const response = await fetch('http://localhost:5000/matriculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Game criado com sucesso!');
        setNome('');
        setPreco('');
        setArmazenamento('');
        navigate("/games");
      } else {
        alert('Erro ao criar game.');
      }
    } catch (error) {
      console.error('Erro ao criar game:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar Game</h2>
      <input
        type="text"
        placeholder="Nome do Game"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Armazenamento"
        value={armazenamento}
        onChange={(e) => setArmazenamento(e.target.value)}
        required
      />
      <button type="submit">Criar Game</button>
    </form>
    </div>
  );
}
