import { useMediaQuery } from "react-responsive";
import { createContext } from "react";

interface BreakPointsContextValues{
    isDesktop: boolean;
    isTablet: boolean;
    isDesktopOrTablet: boolean;
    isMobile: boolean;
    isMobileOrTablet: boolean;
}

const BreakPointsContext = createContext<BreakPointsContextValues>({
    isDesktop: false,
    isTablet: false,
    isDesktopOrTablet: false,
    isMobile: false,
    isMobileOrTablet: false
});

const BreakPointsProvider = ({ children }: { children: React.ReactNode }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMobileOrTablet = useMediaQuery({ maxWidth: 991 });

    const contextValues: BreakPointsContextValues = {
        isDesktop,
        isTablet,
        isDesktopOrTablet,
        isMobile,
        isMobileOrTablet
    }

    return (
        <BreakPointsContext.Provider value={contextValues}>
            {children}
        </BreakPointsContext.Provider>
    );
}

export { BreakPointsContext, BreakPointsProvider };