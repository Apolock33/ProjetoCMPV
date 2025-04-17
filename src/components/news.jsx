import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Card } from 'primereact/card';
import { motion } from 'motion/react';

const News = () => {
    const cardInfos = [
        {
            id: 1,
            title: 'Título da Notícia 1',
            description: 'Descrição sucinta da notícia 1. Esta descrição deve ter no máximo algumas linhas.',
            imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        },
        {
            id: 2,
            title: 'Título da Notícia 2',
            description: 'Descrição sucinta da notícia 2.  Pode ter um texto um pouco maior.',
            imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        },
        {
            id: 3,
            title: 'Título da Notícia 3',
            description: 'Descrição sucinta da notícia 3.',
            imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        },
        {
            id: 4,
            title: 'Título da Notícia 4',
            description: 'Descrição sucinta da notícia 4. Descrição exemplo.',
            imageUrl: 'https://placehold.co/400x200/EEE/31343C',
        },
    ];

    const cardContent = (cardInfo) => {
        return (
            <img src={cardInfo.imageUrl} alt={cardInfo.title} width={100} />
        );
    };

    return (
        <div className="p-4">
            <div className='flex gap-5 align-items-end'>
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Novidades</h1>
                <a href="/novidades" className='flex align-items-center no-underline mb-1 gap-2' style={{ color: 'var(--primary-color)' }}>
                    Veja Mais
                    <FaArrowRight />
                </a>
            </div>
            <div className='grid m-0'>
                {cardInfos.map((card) => (
                    <motion.div className='col-6 ml-0' key={card.id}>
                        <Card className=" mr-3 border-round-sm shadow-0" content={cardContent(card)} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default News;
