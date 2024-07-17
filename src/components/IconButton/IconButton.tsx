import { ReactNode } from 'react';

type IconButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
};

function IconButton({ children, variant = 'secondary' }: IconButtonProps) {
  const primaryColorClasses = `bg-orange-500 text-white hover:bg-orange-400`;
  const secondaryColorClasses = `bg-white text-black hover:bg-gray-50`;
  const tertiaryColorClasses = `bg-yellow-500 text-black hover:bg-yellow-400`;

  const buttonVariants = {
    primary: primaryColorClasses,
    secondary: secondaryColorClasses,
    tertiary: tertiaryColorClasses,
  };

  return <button className={`rounded-full p-2 ${buttonVariants[variant]}`}>{children}</button>;
}

export default IconButton;
