'use client';

import { CartItemRemoveType, useAddItemsToCart, useCartItems, useRemoveItemsFromCart } from '@/api';
import { ProductCartItem } from '@/config/types/entities';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { clsx } from 'clsx';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

import { CartItem } from './components';

export const Cart = () => {
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();
  const { data: cartItems } = useCartItems();
  const { mutate: addItemToCart, isPending: isAddingItemsToCart } = useAddItemsToCart();
  const { mutate: removeItem, isPending: isRemovingItemsFromCart } = useRemoveItemsFromCart();
  const isLoading = isAddingItemsToCart || isRemovingItemsFromCart;

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
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
