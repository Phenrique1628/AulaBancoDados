import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadGames() {
  const [games, setGames] = useState([]);


  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch('http://localhost:5000/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Erro ao buscar os games:', error);
      }
    };

    fetchGame();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setGames(games.filter((game) => game._id !== id));
        alert('Matrícula excluída com sucesso!');
      } else {
        alert('Erro ao excluir matrícula.');
      }
    } catch (error) {
      console.error('Erro ao excluir matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Games</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Game</th>
            <th>Nome do Game</th>
            <th>Preço</th>
            <th>Armazenamento</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>{game._id}</td>
              <td>{game.nome}</td>
              <td>{game.preco}</td>
              <td>{game.armazenamento}</td>
              <td>
                <button onClick={() => handleDelete(game._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
