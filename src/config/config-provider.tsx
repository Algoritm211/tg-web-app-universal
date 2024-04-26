import { config } from '@/config/client-main-config/config';
import React, { createContext, PropsWithChildren, useContext } from 'react';

import { Config } from './types';

const AppConfigContext = createContext<Config>(config);

export const useAppConfig = () => useContext(AppConfigContext);

export const AppConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AppConfigContext.Provider value={config}>{children}</AppConfigContext.Provider>;
};
