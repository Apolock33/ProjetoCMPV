import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import news1 from '../assets/imgs/general/bailecmpv.jpg';
import news2 from '../assets/imgs/general/Comunicado-aos-socios.png';
import { GlobalContext } from '../contexts/globalContext';

const News = () => {
    const { isMobile } = useContext(GlobalContext);
    const { width } = useWindowSize();

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
    ];

    return (
        <div className="p-4">
            <div className="flex gap-3 align-items-end justify-content-between mb-4">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Novidades</h1>
                <Link to="/novidades" className="flex align-items-center no-underline gap-2" style={{ color: 'var(--primary-color)' }}>
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>

            {/* Grid responsivo com PrimeFlex */}
            <div className="flex flex-column">
                {cardInfos.map((card) => (
                    <motion.div
                        key={card.id}
                        className="mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: card.id * 0.1 }}
                    >
                        <div
                            className={`relative overflow-hidden border-round-xl w-full`}
                            style={{
                                height: width == 1440 ? '600px' : width >= 2560 ? '930px' : '400px',
                                aspectRatio: '16 / 9',
                                borderRadius: '12px',
                            }}
                        >
                            {/* Imagem com hover animado */}
                            <motion.img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Overlay no rodapé */}
                            <div
                                className="absolute bottom-0 left-0 w-full text-white px-4 py-3"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(2px)',
                                }}
                            >
                                <h2 className="m-0 text-base font-bold mb-1">{card.title}</h2>
                                <p className="m-0 text-sm">{card.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default News;
