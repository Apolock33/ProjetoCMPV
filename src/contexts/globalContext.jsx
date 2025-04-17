import React, { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import useScrollDown from '../hooks/useScrollDown';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollYValue, setLastScrollYValue] = useState(0);
    const { width } = useWindowSize();
    const { scrollY } = useScrollDown();

    useEffect(() => {
        if (width <= 1025) {
            setIsMobile(true);
        }
        if (width > 1025) {
            setIsMobile(false);
        }

        setTimeout(() => {
            setLastScrollYValue(scrollY);
        }, 1000);

        if (scrollY > 0 && scrollY >= 300) {
            setIsScrollingDown(true);
        }

        if (lastScrollYValue > scrollY) {
            setIsScrollingDown(false);
        }
    });

    return (
        <GlobalContext.Provider value={{ isMobile, isScrollingDown }}>
            {children}
        </GlobalContext.Provider>
    )
}