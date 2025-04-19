import React from 'react'
import useWindowSize from '../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import news1 from '../assets/imgs/general/bailecmpv.jpg';
import news2 from '../assets/imgs/general/Comunicado-aos-socios.png';
import { motion } from 'motion/react';

const HomeNews = () => {
    const { width } = useWindowSize();

    const cardInfosMobile = [
        {
            id: 1,
            title: 'BAILE DE BOAS VINDAS ECEME E 68 ANOS DO CMPV',
            description: '03/04/2025',
            imageUrl: news1
        },
        {
            id: 2,
            title: 'Aviso sobre o feriado da semana santa',
            description: '03/04/2025',
            imageUrl: news2
        },
    ];

    const cardInfos = [
        {
            id: 1,
            title: 'BAILE DE BOAS VINDAS ECEME E 68 ANOS DO CMPV',
            description: '03/04/2025',
            imageUrl: news1
        },
        {
            id: 2,
            title: 'Aviso sobre o feriado da semana santa',
            description: '03/04/2025',
            imageUrl: news2
        },
        {
            id: 3,
            title: 'Aviso sobre o feriado da semana santa',
            description: '03/04/2025',
            imageUrl: news2
        },
        {
            id: 4,
            title: 'Aviso sobre o feriado da semana santa',
            description: '03/04/2025',
            imageUrl: news1
        },
    ];

    return (
        <div className="p-4">
            <div className="flex gap-3 align-items-center justify-content-between mb-4">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Noticias</h1>
                <Link to="/novidades" className="flex align-items-center no-underline gap-2" style={{ color: 'var(--primary-color)' }}>
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>

            <div className={`${width < 768 ? 'flex flex-column' : 'grid'}`}>
                {(width < 769 ? cardInfosMobile : cardInfos).map((card) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: card.id * 0.1 }}
                        className={`${width < 769 ? 'col-12 mb-3' : 'col-6'}`}
                        style={{
                            minHeight: width < 769 ? '300px' : '400px',
                        }}
                    >
                        <div
                            className="relative overflow-hidden border-round-xl w-full h-full"
                            style={{
                                borderRadius: '12px',
                            }}
                        >
                            <motion.img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default HomeNews