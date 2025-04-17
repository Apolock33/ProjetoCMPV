import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Button } from 'primereact/button';
import { FaBars, FaUser } from 'react-icons/fa6';
import { motion } from 'motion/react';
import Logo from '../assets/imgs/logos/LOGO3.png';
import { useNavigate } from 'react-router-dom';
import GeneralDrawer from './generalDrawer';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const {
        isMobile,
        isScrollingDown
    } = useContext(GlobalContext);
    const navigate = useNavigate();

    const publicLinks = [
        { id: 1, name: 'Sobre', path: '/about' },
        { id: 2, name: 'Novidades', path: '/novidades' },
        { id: 3, name: 'Atividades', path: '/atividades' },
        { id: 4, name: 'Espacos', path: '/espacos' },
        { id: 5, name: 'Contatos', path: '/contatos' }
    ];

    return (
        <>
            <motion.header
                id='header'
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.3,
                        ease: 'easeInOut'
                    }
                }}
                className={`${isScrollingDown ? 'hidden' : 'flex'} align-items-center justify-content-between px-5 py-2 w-full fixed top-0 z-10 bg-white shadow-2 `}>

                <div className='cursor-pointer' onClick={() => navigate('/')}>
                    <motion.img
                        initial={{ width: 0 }}
                        animate={{
                            width: isMobile ? 200 : 300,
                            transition: {
                                duration: 0.3,
                                ease: 'easeInOut',
                            }
                        }}
                        src={Logo}
                        alt="Logo"
                        width={isMobile ? 250 : 300}
                    />
                </div>

                {!isMobile ? (
                    <>
                        <nav>
                            <ul className="flex align-items-center gap-4 list-none m-0 p-0">
                                {publicLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.path} className="header-link text-lg">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div>
                            <Button
                                icon={() => <FaUser size={20} />}
                                label='Area do Sócio'
                                rounded
                                className='border-none flex gap-2'
                                onClick={() => navigate('/')}
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        <Button
                            icon={() => <FaBars size={25} />}
                            rounded
                            outlined
                            className='border-none'
                            onClick={() => setVisible(!visible)}
                        />
                    </div>
                )}
            </motion.header>
            {visible && (
                <GeneralDrawer
                    isVisible={visible}
                    onClose={() => setVisible(false)}
                    drawerSide='end'
                />
            )}
        </>
    );
};

export default Header;