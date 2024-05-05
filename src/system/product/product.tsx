'use client';

import { useProduct } from '@/api';
import { useCreateInvoiceLink } from '@/api/hooks';
import { useAppConfig } from '@/config/config-provider';
import { BackButton } from '@/telegram-web-app/components';
import { useHapticFeedback } from '@/telegram-web-app/hooks';
import { useRouter } from 'next-nprogress-bar';
import { useParams } from 'next/navigation';
import React from 'react';

import { ProductDetailHeader, ProductGallery, ProductPrice } from '@/system/product/components';
import { ProductDescription } from '@/system/product/components/product-description/product-description';

export const Product = () => {
  const router = useRouter();
  const { id: productId } = useParams<{ id: string }>();
  const { data: product } = useProduct(productId);
  const { impactOccurred } = useHapticFeedback();
  const {
    global: { isUseCart },
  } = useAppConfig();
  const { mutate: createInvoiceLink, isPending } = useCreateInvoiceLink();

  const routeBack = () => {
    impactOccurred('medium');
    void router.back();
  };

  const onAddToCart = () => {
    console.log(product);
  };

  const onCreateInvoice = async () => {
    if (product) {
      createInvoiceLink(product);
    }
  };

  return (
    <React.Fragment>
      <ProductDetailHeader title={product?.name} subTitle={product?.shortDescription} />
      <ProductGallery photos={product?.images} />
      <ProductPrice
        amount={product?.price.amount}
        currency={product?.price.currency}
        isCreatingInvoicePending={isPending}
        actionButtonText={isUseCart ? 'Add to card' : 'Buy instantly'}
        onActionClick={isUseCart ? onAddToCart : onCreateInvoice}
      />
      <ProductDescription description={product?.description} />
      <BackButton onClick={routeBack} />
    </React.Fragment>
  );
};
