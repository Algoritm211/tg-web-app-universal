'use client';

import { useAddItemsToCart, useCartItems, useProduct } from '@/api';
import { useCreateInvoice } from '@/api/hooks';
import { useAppConfig } from '@/config/config-provider';
import { mapProductToProductCartItemDTO } from '@/shared';
import { BackButton, MainButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import {
  ProductDetailHeader,
  ProductGallery,
  ProductPrice,
  ProductDescription,
} from './components';

export const Product = () => {
  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();
  const { data: product, isPending: isProductPending } = useProduct(productId);
  const { impactOccurred } = useHapticFeedback();
  const {
    global: { paymentMethods },
  } = useAppConfig();
  const { data: cartItems } = useCartItems();
  const { mutate: createInvoice, isPending: isCreatingInvoice } = useCreateInvoice();
  const { mutate: addItemToCart, isPending: isAddingToCart } = useAddItemsToCart();

  const isProductInCart = cartItems?.find((elem) => elem.id === product?.id) !== undefined;

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const routeToCart = () => {
    impactOccurred('medium');
    void router.push('/cart');
  };

  const onAddToCart = () => {
    if (!product) return;
    addItemToCart(mapProductToProductCartItemDTO(product));
  };

  if (isProductPending) {
    return <span className="block mx-auto mt-16 loading loading-spinner loading-lg"></span>
  }

  return (
    <React.Fragment>
      <ProductDetailHeader title={product?.name} subTitle={product?.shortDescription} />
      <ProductGallery photos={product?.images} />
      <ProductPrice
        actionButtonText="Add to card"
        amount={product?.price.amount}
        currency={product?.price.currency}
        paymentMethods={paymentMethods}
        isProductInCart={isProductInCart}
        isCreatingInvoicePending={isCreatingInvoice || isAddingToCart}
        onActionClick={onAddToCart}
      />
      <ProductDescription description={product?.description} />
      <BackButton onClick={routeBack} />

      {cartItems?.length !== 0 && <MainButton text="View your order" onClick={routeToCart} />}
    </React.Fragment>
  );
};
