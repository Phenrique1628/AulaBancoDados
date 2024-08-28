import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMatricula() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [armazenamento, setArmazenamento] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { nome, preco, armazenamento };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Matrícula atualizada com sucesso!');
        navigate("/games");
      } else {
        alert('Erro ao atualizar game.');
      }
    } catch (error) {
      console.error('Erro ao atualizar game:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Matrícula</h2>
      <input
        type="text"
        placeholder="ID do Game"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
      <button type="submit">Atualizar Games</button>
    </form>
    </div>
  );
}
