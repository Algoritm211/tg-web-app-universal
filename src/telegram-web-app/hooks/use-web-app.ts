import { webAppContext } from '@/telegram-web-app/core';
import { useContext } from 'react';

export const useTgWebApp = () => useContext(webAppContext);
