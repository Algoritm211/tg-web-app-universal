import { Icon, IconName } from '@/shared';
import React from 'react';

interface Props {
  icon?: IconName;
  title?: string;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
}

export const EmptyState: React.FC<Props> = ({
  icon,
  title,
  actionButtonText,
  onActionButtonClick,
}) => {
  const DEFAULT_ICON = 'rectangle-group';
  const DEFAULT_TITLE = 'There is no items yet';
  return (
    <div className="my-2 mx-auto flex flex-col items-center">
      <Icon name={icon || DEFAULT_ICON} className="w-10 h-10" />
      <span className="mb-2">{title || DEFAULT_TITLE}</span>
      {onActionButtonClick && (
        <button
          onClick={onActionButtonClick}
          className="btn text-white hover:opacity-80 hover:bg-[var(--tg-theme-link-color)] bg-[var(--tg-theme-link-color)]"
        >
          {actionButtonText}
        </button>
      )}
    </div>
  );
};
