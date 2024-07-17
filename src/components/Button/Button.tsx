import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
}

const Button = ({ children, onClick, icon, variant = 'primary', fullWidth = false }: ButtonProps) => {
  const buttonWidth: string = fullWidth ? 'md:w-full' : 'md:w-fit';

  const primaryColorClasses = `bg-orange-500 text-white hover:bg-orange-400`;
  const secondaryColorClasses = `bg-white text-black hover:bg-gray-50`;
  const tertiaryColorClasses = `bg-yellow-500 text-black hover:bg-yellow-400`;

  const buttonVariants = {
    primary: primaryColorClasses,
    secondary: secondaryColorClasses,
    tertiary: tertiaryColorClasses,
  };

  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${buttonWidth} ${buttonVariants[variant]}`}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
