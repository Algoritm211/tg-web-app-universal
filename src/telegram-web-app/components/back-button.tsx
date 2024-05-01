import {useEffect} from "react";
import {useTgWebApp} from "@/telegram-web-app";

export interface BackButtonProps {
  /** The back button press event handler */
  onClick?: () => void;
}
export const BackButton = ({ onClick }: BackButtonProps): null => {
  const WebApp = useTgWebApp();
  const BackButton = WebApp?.BackButton;


  useEffect(() => {
    if (!onClick || !BackButton) {
      return;
    }
    BackButton.show();
    BackButton.onClick(onClick);
    return () => {
      BackButton.hide();
      BackButton.offClick(onClick);
    };
  }, [onClick, BackButton]);

  return null;
};
