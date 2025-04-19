import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import event1 from '../assets/imgs/general/evento1.jpg';
import event2 from '../assets/imgs/general/evento2.jpg';
import useWindowSize from '../hooks/useWindowSize';
import { GlobalContext } from '../contexts/globalContext.jsx';

const Events = () => {
    const { isMobile } = useContext(GlobalContext);
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
                    className='flex align-items-center no-underline gap-2'
                    style={{ color: 'var(--primary-color)' }}
                >
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>

            <div className="flex flex-column gap-3">
                {eventItems.map((event) => (
                    <div key={event.id} className="w-full">
                        <Card className="shadow-2 border-round-xl w-full">
                            <div className={`flex gap-3 align-items-center`}>
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="object-cover border-round-right border-round-xl"
                                    style={{ width: '30%' }}
                                />
                                <div className={`"flex flex-column"`}>
                                    <h2 className="text-lg font-semibold mb-1">{event.date}</h2>
                                    <p className="text-sm text-color-secondary m-0">{event.title}</p>
                                </div>
                            </div>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
