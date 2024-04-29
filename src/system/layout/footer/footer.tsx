import React from 'react';

import { Icon } from '@/shared/components/icon/icon';

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-purple-900 text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Icon name="footer-stub" className="w-9 h-9 fill-current" />
        <p>MaoCars, Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <Icon name="twitter" className="w-6 h-6 fill-current" />
        </a>
        <a>
          <Icon name="youtube" className="w-6 h-6 fill-current" />
        </a>
        <a>
          <Icon name="facebook" className="w-6 h-6 fill-current" />
        </a>
      </nav>
    </footer>
  );
};
