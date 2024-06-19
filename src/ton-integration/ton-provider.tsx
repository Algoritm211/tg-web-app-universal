import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import React, { PropsWithChildren } from 'react';

export const TonProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={`https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/manifest.json`}
      uiPreferences={{ theme: THEME.DARK, borderRadius: 's' }}
      actionsConfiguration={{
        twaReturnUrl: `https://t.me/${process.env.NEXT_PUBLIC_BOT_NAME}/cart`,
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
