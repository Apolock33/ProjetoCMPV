import React, { useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GlobalContext } from '../contexts/globalContext';
import { FaX } from 'react-icons/fa6';
import { Button } from 'primereact/button';

const ImgDialog = ({ visible, onclose, imgSelected }) => {
    const { isMobile } = useContext(GlobalContext);

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: { opacity: 0, y: "-100vh", scale: 0.6 },
        visible: {
            opacity: 1,
            y: "0",
            scale: 1,
            transition: { delay: 0.1, duration: 0.3 }
        },
        exit: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onclose();
            }
        };

        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible, onclose]);

    const imageTemplate = (image) => {
        return (
            <div className="text-center">
                <img
                    src={image?.itemImageSrc}
                    alt={image?.title}
                    style={{
                        maxWidth: '100%',
                        maxHeight: isMobile ? '350px' : '500px',
                        borderRadius: '12px'
                    }}
                />
                <h3 className="text-white mt-3">{image?.title}</h3>
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
                    onClick={onclose}
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
                        zIndex: 10
                    }}
                >
                    <Button
                        icon={() => <FaX size={35} />}
                        rounded
                        text
                        className="absolute top-0 right-0 z-5 text-white p-2 m-5"
                        onClick={onclose}
                    />

                    <motion.div
                        className="modal flex justify-content-center align-items-center"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--theme-color)',
                            borderRadius: '8px',
                            width: '80%',
                            maxWidth: '650px',
                        }}
                    >
                        {imgSelected && imageTemplate(imgSelected)}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImgDialog;
