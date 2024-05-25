import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import React, { PropsWithChildren } from 'react';

export const TonProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={`https://${process.env.NEXT_PUBLIC_TEST_NGROK_URL}/tonconnect-manifest.json`}
      uiPreferences={{ theme: THEME.DARK }}
      actionsConfiguration={{
        twaReturnUrl: `https://t.me/${process.env.NEXT_PUBLIC_BOT_NAME}`,
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
