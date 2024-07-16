import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrossel.css';
import imagem from '../../public/imagem.png';

const Carrossel = () => {
    return (
        <Carousel
            showThumbs={false} autoPlay={false} infiniteLoop={false}
        >
            <div className='pai'>
                <div className='lado py-10 px-5'>
                    <div>Melhores Ofertas</div>
                    <div>Queima de stoque</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga ex ullam magni, aut tempore ea blanditiis.</div>
                    <div>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ver Ofertas</button>
                    </div>
                </div>
                <div className='lado'>chuchu</div>
            </div>
            <div>
                <img src={imagem} alt="Imagem 2" />
            </div>
            {/* <div>
                <img src={imagem} alt="Imagem 3" />
            </div> */}
            {/* <div>
                <img src={imagem} alt="Imagem 4" />
            </div> */}
        </Carousel>
    );
}

export default Carrossel;
