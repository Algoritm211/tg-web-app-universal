import React, { PropsWithChildren } from 'react';

export const ProductContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="mx-1 grid gap-5 justify-items-center">{children}</div>
    </React.Fragment>
  );
};
