import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  selected?: boolean;
};

function Card({ children, selected = false }: CardProps) {
  return (
    <div
      className={`flex h-full w-full flex-row gap-4 rounded-3xl bg-white p-8 shadow-lg ${selected ? 'border-2 border-orange-500 shadow-orange-500' : ''}`}
    >
      {children}
    </div>
  );
}

export default Card;
