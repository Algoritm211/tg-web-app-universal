import { getWebAppFromGlobal } from '../utils';

export const onError = () => {
  const WebApp = getWebAppFromGlobal();
  const HapticFeedback = WebApp?.HapticFeedback;

  WebApp?.showAlert('An error has occurred');
  HapticFeedback?.notificationOccurred('error');
};
