import React, { createContext, useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import useScrollDown from '../hooks/useScrollDown';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollYValue, setLastScrollYValue] = useState(0);
    const [showSecondaryHeader, setShowSecondaryHeader] = useState(true);
    const [zoomLevel, setZoomLevel] = useState(1);
    const { width } = useWindowSize();
    const { scrollY } = useScrollDown();

    useEffect(() => {
        if (width <= 1024) {
            setIsMobile(true);
        }

        if (width > 1024) {
            setIsMobile(false);
        }

        setTimeout(() => {
            setLastScrollYValue(scrollY);
        }, 1000);

        if (scrollY === 0) {
            setShowSecondaryHeader(true);
        }

        if (scrollY > 0 && scrollY >= 100) {
            setShowSecondaryHeader(false);
        }

        if (scrollY > 0 && scrollY >= 200) {
            setIsScrollingDown(true);
        }

        if (lastScrollYValue > scrollY) {
            setIsScrollingDown(false);
        }
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location.pathname])

    return (
        <GlobalContext.Provider value={{ isMobile, isScrollingDown, showSecondaryHeader, zoomLevel, setZoomLevel }}>
            {children}
        </GlobalContext.Provider>
    )
}