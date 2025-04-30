import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { FaX } from 'react-icons/fa6';
import useWindowSize from '../hooks/useWindowSize';

const CarouselDialog = ({ visible, onClose, images }) => {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: { opacity: 0, y: '-100vh', scale: 0.6 },
        visible: {
            opacity: 1,
            y: '0',
            scale: 1,
            transition: { delay: 0.1, duration: 0.3 },
        },
        exit: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } },
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible, onClose]);

    const itemTemplate = (item) => {
        if (typeof item !== 'string') return null;

        return (
            <div className="w-full flex justify-content-center">
                <img
                    src={item}
                    alt="Imagem da galeria"
                    style={{
                        width: isMobile ? '100%' : '80%',
                        height: 'auto',
                        maxHeight: isMobile ? '300px' : '500px',
                        objectFit: 'contain',
                        borderRadius: '12px',
                    }}
                />
            </div>
        );
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="backdrop overflow-hidden"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10,
                    }}
                >
                    <Button
                        icon={() => <FaX size={30} />}
                        rounded
                        text
                        className={`absolute top-0 right-0 z-5 text-white p-2 ${isMobile ? 'm-3' : 'm-5'}`}
                        onClick={onClose}
                    />

                    <motion.div
                        className="modal flex justify-content-center align-items-center"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            borderRadius: '8px',
                            width: '90%',
                            maxWidth: '850px',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Carousel
                            value={images}
                            numVisible={1}
                            numScroll={1}
                            circular
                            autoplayInterval={4000}
                            itemTemplate={itemTemplate}
                            showNavigators
                            showIndicators
                            style={{ width: '100%' }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CarouselDialog;
