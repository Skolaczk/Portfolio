import React, { createContext, useState, useContext, useEffect } from 'react';

const WindowContext = createContext({
  matchMedia: null,
});

const isBrowser = typeof window !== 'undefined';

export const WindowProvider = ({ children }) => {
  const [matchMedia, setMatchMedia] = useState(
    isBrowser ? window.matchMedia('(min-width: 768px)').matches : null
  );

  const getMediaMatches = () => {
    const { matches } = window.matchMedia('(min-width: 768px)');
    setMatchMedia(matches);
  };

  useEffect(() => {
    window.addEventListener('resize', getMediaMatches);

    return () => {
      window.removeEventListener('resize', getMediaMatches);
    };
  }, []);

  return (
    <WindowContext.Provider value={{ matchMedia }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);
