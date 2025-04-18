import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Rents = () => {
    return (
        <div className='p-4'>
            <div className="flex gap-3 align-items-end justify-content-between mb-4">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Aluguel de Espaços</h1>
                <Link to="/novidades" className="flex align-items-center no-underline gap-2" style={{ color: 'var(--primary-color)' }}>
                    Veja Mais
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default Rents