import { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "../../context";
import Navbar from "../navbar"

const Layout = ({children}) => {
  const [state, setState] = useState({
    height: 0,
    mobile: false,
    scrolllock: 0,
    width: 0
  });
  const updateDimensions = useCallback(() => {
    setState((previous) => ({
      ...previous,
      height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
      mobile: window.innerWidth < 992,
      scrolllock: window.innerWidth < 1025 ? false : true,
      width: window.innerWidth,
    }))
  }, [])

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [updateDimensions])

  return (
    <ThemeProvider
        value={{ height: state.mobile ? 'auto' : state.height }}
      >
        <Navbar />
        {children}
      </ThemeProvider>
  );
  
};

export default Layout;
