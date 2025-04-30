import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import useWindowSize from '../hooks/useWindowSize';
import espaco1 from '../assets/imgs/general/belasartes.jpg';
import espaco2 from '../assets/imgs/general/belavsita.jpg';
import espaco3 from '../assets/imgs/general/terraco.jpg';
import espaco4 from '../assets/imgs/general/tamandare.jpg';
import espaco5 from '../assets/imgs/general/casablancaebelavista.jpg';
// Importe imagens extras para a galeria
import espaco1img2 from '../assets/imgs/general/terraco.jpg';
import espaco1img3 from '../assets/imgs/general/belavsita.jpg';
import CarouselDialog from '../components/carouselDialog'; // ajuste o caminho conforme sua estrutura

const Rents = () => {
    const { width } = useWindowSize();
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const imgsSpaces = [
        {
            id: 1,
            itemImageSrc: espaco1,
            title: 'Belas Artes',
            gallery: [
                espaco1,
                espaco1img2,
                espaco1img3                
            ]
        },
        {
            id: 2,
            itemImageSrc: espaco2,
            title: 'Bela Vista',
            gallery: [espaco2]
        },
        {
            id: 3,
            itemImageSrc: espaco3,
            title: 'Espaço Duque de Caxias',
            gallery: [espaco3]
        },
        {
            id: 4,
            itemImageSrc: espaco4,
            title: 'Arcos e Tamandaré',
            gallery: [espaco4]
        },
        {
            id: 5,
            itemImageSrc: espaco5,
            title: 'Casablanca e Bela Vista',
            gallery: [espaco5]
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
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
                onClick={() => {
                    setSelectedImage(item);
                    setVisibleDialog(true);
                }}
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
            <div className="mb-4 px-6">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Aluguel de Espaços</h1>
            </div>
            <div className='px-6'>
                <p className='text-lg font-medium'
                    style={{ fontFamily: 'var(--font-family-suport)' }}>Clique nos cards para mais informações</p>
            </div>
            <div className="px-3 md:px-6">
                <Carousel
                    value={imgsSpaces}
                    numVisible={width >= 1024 ? 3 : width >= 768 ? 2 : 1}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    style={{ width: '100%' }}
                    itemTemplate={itemTemplate}
                    showNavigators={width >= 768}
                    showIndicators
                    circular
                    draggable
                />
            </div>

            <CarouselDialog
                visible={visibleDialog}
                onClose={() => setVisibleDialog(false)}
                initialImage={selectedImage}
                images={selectedImage?.gallery}
            />
        </div>
    );
};

export default Rents;
