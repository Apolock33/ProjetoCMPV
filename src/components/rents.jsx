import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import espaco1 from '../assets/imgs/general/belasartes.jpg';
import espaco2 from '../assets/imgs/general/belavsita.jpg';
import espaco3 from '../assets/imgs/general/terraco.jpg';
import espaco4 from '../assets/imgs/general/tamandare.jpg';
import espaco5 from '../assets/imgs/general/casablancaebelavista.jpg';
import { Carousel } from 'primereact/carousel'

const Rents = () => {
    const navigate = useNavigate();

    const imgsSpaces = [
        {
            id: 1,
            itemImageSrc: espaco1,
            title: 'Belas Artes'
        },
        {
            id: 2,
            itemImageSrc: espaco2,
            title: 'Bela Vista'
        },
        {
            id: 3,
            itemImageSrc: espaco3,
            title: 'Espaço Duque de Caxias'
        },
        {
            id: 4,
            itemImageSrc: espaco4,
            title: 'Arcos e Tamandaré'
        },
        {
            id: 5,
            itemImageSrc: espaco5,
            title: 'Casablanca e Bela Vista'
        }
    ]

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '426px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const itemTemplate = (item) => {
        return (
            <div 
                className="cursor-pointer relative overflow-hidden border-round-xl mx-2"
                onClick={() => navigate('/novidades')}
            >
                <img
                    src={item.itemImageSrc}
                    alt={item.title}
                    className="w-full border-round-xl"
                />
                <div 
                    className="absolute bottom-0 left-0 w-full text-white"
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(2px)',
                        padding: '0.1rem 1rem'
                    }}
                >
                    <h3 className="m-0 text-lg font-bold">{item.title}</h3>
                </div>
            </div>
        );
    };
    

    return (
        <div>
            <div className="flex gap-3 align-items-center justify-content-between mb-4 px-6">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Aluguel de Espaços</h1>
                <Link to="/novidades" className="flex align-items-center no-underline gap-2" style={{ color: 'var(--primary-color)' }}>
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>
            <div className='px-6'>
                <p>Clique nos cards para mais informações</p>
            </div>
            <div>
                <Carousel
                    value={imgsSpaces}
                    numVisible={3}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    style={{ width: '100vw' }}
                    itemTemplate={itemTemplate}
                    showNavigators
                    showIndicators
                    circular
                />
            </div>
        </div >
    )
}

export default Rents