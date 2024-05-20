import { useTgWebApp } from '@/telegram-web-app';
import { systemContext, useSmoothButtonsTransition } from '@/telegram-web-app/core';
import { useContext, useEffect, useId } from 'react';

export interface BackButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps): null => {
  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useTgWebApp();
  const BackButton = WebApp?.BackButton;

  useEffect(() => {
    if (!onClick || !BackButton) {
      return;
    }

    BackButton.onClick(onClick);
    return () => {
      BackButton.offClick(onClick);
    };
  }, [onClick, BackButton]);

  useSmoothButtonsTransition({
    show: BackButton?.show,
    hide: BackButton?.hide,
    currentShowedIdRef: system.BackButton,
    id: buttonId,
  });

  return null;
};
