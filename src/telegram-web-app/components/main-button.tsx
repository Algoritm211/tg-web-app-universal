import { useTgWebApp } from '@/telegram-web-app';
import { systemContext, useSmoothButtonsTransition } from '@/telegram-web-app/core';
import { useContext, useEffect, useId } from 'react';

/**
 * The props type of {@link MainButton | `MainButton`}.
 */
export interface MainButtonProps {
  /**
   * Current button text
   * @defaultValue Set to `CONTINUE` by default
   */
  text?: string;
  /**
   * The button progress state indicator.
   * @defaultValue  Set to `false` by default
   */
  progress?: boolean;
  /**
   * Just an alias on the {@link MainButtonProps.disabled}
   * @deprecated Use {@link MainButtonProps.disabled} instead, will be removed
   * @ignore
   */
  disable?: boolean;
  /**
   * The button disable state.
   * @defaultValue Set to `false` y defaults
   */
  disabled?: boolean;
  /** The button press event handler */
  onClick?: () => void;
  /**
   * Current button color.
   * @defaultValue Set to themeParams.button_color by default
   */
  color?: string;
  /**
   * Current button text color
   * @defaultValue Set to themeParams.button_text_color by default
   */
  textColor?: string;
}

export const MainButton = ({
  text = 'CONTINUE',
  progress = false,
  disabled = false,
  color,
  textColor,
  onClick,
}: MainButtonProps): null => {
  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useTgWebApp();
  const MainButton = WebApp?.MainButton;
  const themeParams = WebApp?.themeParams;

  useEffect(() => {
    MainButton?.setParams({
      color: color || themeParams?.button_color || '#fff',
    });
  }, [color, themeParams, MainButton]);

  useEffect(() => {
    MainButton?.setParams({
      text_color: textColor || themeParams?.button_text_color || '#000',
    });
  }, [MainButton, themeParams, textColor]);

  useEffect(() => {
    MainButton?.setText(text);
  }, [text, MainButton]);

  useEffect(() => {
    if (disabled) {
      MainButton?.disable();
    } else if (!disabled) {
      MainButton?.enable();
    }
  }, [disabled, MainButton]);

  useEffect(() => {
    if (progress) {
      MainButton?.showProgress(false);
    } else if (!progress) {
      MainButton?.hideProgress();
    }
  }, [progress, MainButton]);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    MainButton?.onClick(onClick);
    return () => {
      MainButton?.offClick(onClick);
    };
  }, [onClick, MainButton]);

  useSmoothButtonsTransition({
    show: MainButton?.show,
    hide: MainButton?.hide,
    currentShowedIdRef: system.MainButton,
    id: buttonId,
  });

  return null;
};
