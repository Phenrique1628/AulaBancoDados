import { Link } from 'react-router-dom';
import '../globals.css';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../../../components/Footer';

export default function Home() {
    return (
        <>
        <Carousel 
        infiniteLoop
        useKeyboardArrows
        autoplay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
        
        <div className="banner">
        
          <img src="https://psxbrasil.com.br/wp-content/uploads/2022/04/Banner-PS-Studios.jpg" alt="banner1" />
        
        </div>
        
        <div className="banner">
        
          <img src="https://i.imgur.com/5tfhKFN.png" alt="banner2" />
        
        </div>
        
        <div className="banner">
        
          <img src="https://cdn.shopify.com/s/files/1/0453/2790/9014/collections/EXG_CABLE_GUYS_IKON_BANNER_3500x1360_V1_0753691d-8918-4fe9-9b26-ffe9cbee0004.jpg?v=1682026299" alt="banner3" />
        
        </div>
        
        
        </Carousel>

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

        <Footer/>
        </>
    );
}
