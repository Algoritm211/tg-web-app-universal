'use client';

import { useCartItems } from '@/api';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/components/icon/icon';

export const Header = () => {
  const { impactOccurred } = useHapticFeedback();
  const { data: cartItems, isLoading } = useCartItems();

  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <label tabIndex={0} htmlFor="menu-drawer" className="btn btn-ghost lg:hidden">
          <Icon name="menu-bars" className="w-6 h-6" />
        </label>
      </div>
      <div className="navbar-center">
        <Link
          onClick={() => impactOccurred('medium')}
          className="btn btn-ghost normal-case text-xl"
          href="/"
        >
          💐Flower Shop
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          href="/cart"
          onClick={() => impactOccurred('medium')}
          className="btn btn-ghost btn-circle"
        >
          {isLoading ? (
            <span className="loading loading-spinner" />
          ) : (
            <div className="indicator">
              <Icon name="cart" className="w-6 h-6" />
              <span
                className="badge badge-xs text-white indicator-item
                border-telegram-link bg-telegram-link"
              >
                {cartItems?.length}
              </span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
