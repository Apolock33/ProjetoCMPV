import React from 'react';
import { Card } from 'primereact/card';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Events = () => {
    const eventItems = [
        { id: 1, title: 'Evento 1', date: '20/04/2025' },
        { id: 2, title: 'Evento 2', date: '21/04/2025' },
        { id: 3, title: 'Evento 3', date: '22/04/2025' },
        { id: 4, title: 'Evento 4', date: '23/04/2025' },
        { id: 5, title: 'Evento 4', date: '23/04/2025' },
    ];

    return (
        <div className='p-4'>
            <div className='flex gap-3 align-items-end justify-content-between mb-4'>
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
                        <Card className="shadow-2 border-round-xl p-3">
                            <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
                            <p className="text-sm text-color-secondary">{event.date}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
