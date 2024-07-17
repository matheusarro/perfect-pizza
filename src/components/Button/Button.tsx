import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({ children, onClick, icon, variant = 'primary', fullWidth = false, disabled = false }: ButtonProps) => {
  const buttonWidth: string = fullWidth ? 'md:w-full' : 'md:w-fit';

  const primaryColorClasses = `bg-orange-500 text-white hover:bg-orange-400`;
  const secondaryColorClasses = `bg-white text-black hover:bg-gray-50`;
  const tertiaryColorClasses = `bg-yellow-500 text-black hover:bg-yellow-400`;
  const disabledColorClasses = `bg-gray-300 text-white`;

  const buttonVariants = {
    primary: primaryColorClasses,
    secondary: secondaryColorClasses,
    tertiary: tertiaryColorClasses,
  };

  return (
    <button
      disabled={disabled}
      className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:cursor-not-allowed ${buttonWidth} ${disabled ? disabledColorClasses : buttonVariants[variant]}`}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
