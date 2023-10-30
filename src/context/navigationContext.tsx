import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

type NavigationContext = {
  currentPath: string;
  navigate: (to: string, data?: any) => void;
}

const defaultValue: NavigationContext = {
  currentPath: '',
  navigate: () => {},
}

export const NavigationContext = React.createContext<NavigationContext>(defaultValue);

export const NavigationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = (event: PopStateEvent) => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };

  }, []);

  const navigate = useCallback((to: string, data: any) => {
    window.history.pushState(data, '', to);
    setCurrentPath(to);
  }, []);

  const value = useMemo(() => {
    return {
      currentPath: currentPath,
      navigate: navigate,
    };
  }, [currentPath, navigate])

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
