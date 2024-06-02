'use client';

import { CartItemRemoveType, useAddItemsToCart, useCartItems, useRemoveItemsFromCart } from '@/api';
import { ProductCartItem } from '@/config/types/entities';
import { currencyFormatter, EmptyState, ProductPaymentProcess } from '@/shared';
import { BackButton, MainButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { clsx } from 'clsx';
import { useRouter } from 'next-nprogress-bar';
import Link from 'next/link';
import React, { useState } from 'react';

import { CartItem } from './components';

export const Cart = () => {
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();
  const { data: cartItems } = useCartItems();
  const { mutate: addItemToCart, isPending: isAddingItemsToCart } = useAddItemsToCart();
  const { mutate: removeItem, isPending: isRemovingItemsFromCart } = useRemoveItemsFromCart();
  const isLoading = isAddingItemsToCart || isRemovingItemsFromCart;
  const totalCartSum =
    cartItems?.reduce((acc, elem) => {
      return acc + elem.count * elem.price.amount;
    }, 0) || 0;

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onAddNewItem = (product: ProductCartItem) => {
    addItemToCart(product);
  };

  const onRemoveItem = (product: ProductCartItem, removeType: CartItemRemoveType) => {
    removeItem({ itemToRemove: product, removeType });
  };

  return (
    <React.Fragment>
      {!cartItems || cartItems.length === 0 ? (
        <EmptyState actionButtonText="Go to main page" onActionButtonClick={routeBack} />
      ) : (
        <>
          <div className="mx-4 flex justify-end">
            <Link
              href="/"
              className="link text-[var(--tg-theme-link-color)] hover:opacity-80 font-bold"
            >
              Edit choice
            </Link>
          </div>
          <div className="mx-2 my-2 divider"></div>
          <div className={clsx('flex gap-2 flex-col px-2', { 'opacity-80': isLoading })}>
            {cartItems?.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  onAddItem={() => onAddNewItem(product)}
                  onSubtractItem={() => onRemoveItem(product, CartItemRemoveType.subtract)}
                  onRemoveItem={() => onRemoveItem(product, CartItemRemoveType.removeCompletely)}
                />
              );
            })}
          </div>
          <div className="mx-2 my-2 divider"></div>
          <div className="mx-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>{currencyFormatter(totalCartSum, cartItems?.[0]?.price.currency)}</span>
          </div>
          <ProductPaymentProcess totalSum={totalCartSum} cartItems={cartItems} />
        </>
      )}
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
