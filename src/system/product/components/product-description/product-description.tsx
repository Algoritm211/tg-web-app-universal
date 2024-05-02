import React from 'react';
import Markdown from "react-markdown";

interface Props {
  description: string | undefined
}

export const ProductDescription: React.FC<Props> = ({description = ''}) => {
  return (
    <div className='px-2 mb-4'>
      <h2 className='text-xl font-bold'>Description</h2>
      <div className='revert-tailwind'>
        <Markdown>
          {description}
        </Markdown>
      </div>
    </div>
  );
};
