import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const News = () => {
  const cardInfos = [
    {
      id: 1,
      title: 'Título da Notícia 1',
      description: 'Descrição sucinta da notícia 1. Esta descrição deve ter no máximo algumas linhas.',
      imageUrl: 'https://placehold.co/330x400/EEE/31343C',
    },
    {
      id: 2,
      title: 'Título da Notícia 2',
      description: 'Descrição sucinta da notícia 2. Pode ter um texto um pouco maior.',
      imageUrl: 'https://placehold.co/330x400/EEE/31343C',
    },
    {
      id: 3,
      title: 'Título da Notícia 3',
      description: 'Descrição sucinta da notícia 3.',
      imageUrl: 'https://placehold.co/330x400/EEE/31343C',
    },
    {
      id: 4,
      title: 'Título da Notícia 4',
      description: 'Descrição sucinta da notícia 4. Descrição exemplo.',
      imageUrl: 'https://placehold.co/330x400/EEE/31343C',
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

      <div className="grid">
        {cardInfos.map((card) => (
          <motion.div
            key={card.id}
            className="col-12 md:col-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: card.id * 0.1 }}
          >
            <div
              className="relative overflow-hidden border-round-xl"
              style={{
                width: '330px',
                height: '400px',
                aspectRatio: '16 / 9', // paisagem
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

              {/* Overlay no rodapé com 30% de altura */}
              <div
                className="absolute bottom-0 left-0 w-full text-white px-4 py-3"
                style={{
                  height: '30%',
                  background: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backdropFilter: 'blur(2px)',
                }}
              >
                <h2 className="m-0 text-base font-bold">{card.title}</h2>
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
