import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrossel.css';
import imagem from '../public/imagem.png';

const Carrossel = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={imagem} alt="Imagem 1" />
            </div>
            <div>
                <img src={imagem} alt="Imagem 2" />
            </div>
            <div>
                <img src={imagem} alt="Imagem 3" />
            </div>
            <div>
                <img src={imagem} alt="Imagem 4" />
            </div>
        </Carousel>
    );
}

export default Carrossel;
