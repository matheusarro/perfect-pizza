import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <div className={'flex h-full w-full flex-row gap-4 rounded-3xl bg-white p-8 shadow-lg'}>{children}</div>;
}

export default Card;
