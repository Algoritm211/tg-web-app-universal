'use client';

import { CartItemRemoveType, useAddItemsToCart, useCartItems, useRemoveItemsFromCart } from '@/api';
import { ProductCartItem } from '@/config/types/entities';
import { currencyFormatter, EmptyState, ProductPaymentProcess } from '@/shared';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { clsx } from 'clsx';
import { useRouter } from 'next-nprogress-bar';
import Link from 'next/link';
import React from 'react';

import { CartItem } from './components';

export const Cart = () => {
  const router = useRouter();
  const { impactOccurred } = useHapticFeedback();
  const address = useTonAddress();
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
          <div className="flex flex-col items-center text-center mx-2 mb-2 rounded-xl p-2 bg-gray-200">
            <h2 className="font-bold">ℹ️️You can pay using your TON wallet</h2>
            {address ? (
              <p className="text-base-400 text-sm mb-1">
                If you want to change the address - do it with the button below
              </p>
            ) : (
              <p className="text-base-400 text-sm mb-1">
                If you haven`t connected you wallet yet - you can do it using the button below
              </p>
            )}
            <TonConnectButton />
          </div>
          <div className="mx-4 flex justify-end">
            <Link href="/" className="link text-telegram-link hover:opacity-80 font-bold">
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
