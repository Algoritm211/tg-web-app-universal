'use client';
import React from 'react';

import {useParams, useRouter} from "next/navigation";
import {BackButton} from "@/telegram-web-app/components";

export const Product = () => {
  const router = useRouter();
  const {id: productId} = useParams<{ id: string }>()

  return (
    <React.Fragment>
      <pre>
        Product ID - {productId}
      </pre>
      <BackButton onClick={() => router.back()} />
    </React.Fragment>
  );
};
