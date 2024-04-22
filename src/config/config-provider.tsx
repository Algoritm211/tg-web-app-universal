import React, {createContext, PropsWithChildren, useContext} from 'react';

const AppConfigContext = createContext({some: 'info'});

export const useAppConfig = () => useContext(AppConfigContext);

export const AppConfigProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <AppConfigContext.Provider value={{some: 'info'}}>
      {children}
    </AppConfigContext.Provider>
  )
}
