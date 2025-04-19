import React from 'react';
import { Button } from 'primereact/button';
import { FaWhatsapp } from 'react-icons/fa6';

const WppButton = () => {
    return (
        <Button
            icon={() => <FaWhatsapp size={35} />}
            rounded
            className="absolute bottom-0 right-0 z-5 text-white p-2"
            aria-label="Fale conosco no WhatsApp"
        />
    );
};

export default WppButton;
