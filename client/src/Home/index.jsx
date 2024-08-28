import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Biblioteca de Games</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Registrar Games</div>
                </Link>
                <Link to="/games" className="card">
                    <div>Lista de Games</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Games</div>
                </Link>
            </div>
        </div>
    );
}
