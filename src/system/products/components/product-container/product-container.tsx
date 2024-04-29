import React, { PropsWithChildren } from 'react';

export const ProductContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="my-5 mx-1 grid gap-5 justify-items-center">{children}</div>;
};
