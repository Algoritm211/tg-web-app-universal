import { useTgWebApp } from '@/telegram-web-app';
import { useCallback } from 'react';

export type ImpactOccurredFunction = (
  style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
) => void;

export type NotificationOccurredFunction = (type: 'error' | 'success' | 'warning') => void;

export type SelectionChangedFunction = () => void;

export const useHapticFeedback = (): {
  impactOccurred: ImpactOccurredFunction;
  notificationOccurred: NotificationOccurredFunction;
  selectionChanged: SelectionChangedFunction;
} => {
  const WebApp = useTgWebApp();
  const HapticFeedback = WebApp?.HapticFeedback;

  const impactOccurred: ImpactOccurredFunction = useCallback(
    (...args) => HapticFeedback?.impactOccurred(...args),
    [HapticFeedback]
  );
  const notificationOccurred: NotificationOccurredFunction = useCallback(
    (...args) => HapticFeedback?.notificationOccurred(...args),
    [HapticFeedback]
  );
  const selectionChanged: SelectionChangedFunction = useCallback(
    (...args) => HapticFeedback?.selectionChanged(...args),
    [HapticFeedback]
  );

  return { impactOccurred, notificationOccurred, selectionChanged } as const;
};
