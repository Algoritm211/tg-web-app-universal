import React from 'react';

interface Props {
  title: string | undefined;
  subTitle: string | undefined;
}

export const ProductDetailHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <div className="px-2 mb-4 grid gap-2 md:grid-cols-[auto_40%] items-center">
        <div className="flex-grow-0">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="text-gray-600">{subTitle}</h2>
        </div>
      </div>
    </>
  );
};
