import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import { FaX } from 'react-icons/fa6';

const GeneralDrawer = ({ isVisible, onClose, drawerSide, children }) => {

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: { opacity: 0, x: "200vw", scale: 0.6 },
        visible: {
            opacity: 1,
            x: "0",
            scale: 1,
            transition: { delay: 0.1, duration: 0.3 }
        },
        exit: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="backdrop"
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
                        justifyContent: drawerSide,
                        alignItems: 'center',
                        zIndex: 10
                    }}
                >
                    <motion.div
                        className="modal"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                    >
                        <div className='flex justify-content-end'>
                            <FaX size={20} onClick={onClose} />
                        </div>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default GeneralDrawer