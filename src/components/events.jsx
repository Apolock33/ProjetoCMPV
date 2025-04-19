import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import event1 from '../assets/imgs/general/evento1.jpg';
import useWindowSize from '../hooks/useWindowSize';

const Events = () => {
    const { width } = useWindowSize();

    const eventItems = [
        { id: 1, img: event1, title: 'Evento 1', date: '20/04/2025' },
        { id: 2, img: event1, title: 'Evento 2', date: '21/04/2025' },
        { id: 3, img: event1, title: 'Evento 3', date: '22/04/2025' },
        { id: 4, img: event1, title: 'Domingo de Páscoa da Garotada', date: '23/04/2025' },
    ];

    useEffect(() => {

    }, [width]);

    return (
        <div className='p-4'>
            <div className='flex gap-3 align-items-center justify-content-between mb-4'>
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Eventos</h1>
                <Link
                    to="/eventos"
                    className='flex align-items-center no-underline gap-2 font-medium'
                    style={{ color: 'var(--primary-color)' }}
                >
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>

            <div className="flex flex-column gap-3">
                {eventItems.map((event) => (
                    <div
                        key={event.id}
                        className="w-full"
                        style={{
                            height: width < 768 ? '100px' : '195px',
                        }}
                    >
                        <div className="w-full  overflow-hidden border-round-xl  shadow-2 bg-white">
                            <div className="flex h-full justify-content-start align-items-center">
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    style={{
                                        width: width < 768 ? '100px' : '150px', // largura fixa menor
                                        height: width < 768 ? '100px' : '150px', // altura fixa menor
                                        objectFit: 'cover',
                                        flexShrink: 0,
                                    }}
                                />

                                <div className="flex flex-column justify-content-center px-3 w-70 h-full">
                                    <h2 className="text-lg font-semibold mb-1">{event.date}</h2>
                                    <p className={`text-color-secondary m-0 ${width < 768 ? 'text-sm' : 'text-xl'}`}>{event.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Events;
