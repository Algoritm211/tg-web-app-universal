import { MutableRefObject, useEffect } from 'react';

const emptyFunction = () => {};

export const useSmoothButtonsTransition = ({
  id,
  show = emptyFunction,
  hide = emptyFunction,
  currentShowedIdRef,
}: {
  id: string;
  show: typeof emptyFunction | undefined;
  hide: typeof emptyFunction | undefined;
  currentShowedIdRef: MutableRefObject<string | null>;
}) => {
  const SMOOTH_TRANSITION_MS = 100;

  useEffect(() => {
    show();
    currentShowedIdRef.current = id;

    return () => {
      currentShowedIdRef.current = null;
      setTimeout(() => {
        if (currentShowedIdRef.current) return;

        hide();
      }, SMOOTH_TRANSITION_MS);
    };
  }, [hide, id, currentShowedIdRef, show]);
};
