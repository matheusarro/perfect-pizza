import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import IconButton from '../IconButton/IconButton';

interface HeaderProps {
  title: string;
  description?: string;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
}

const Header = ({ title, description, showBackButton = false, onBackButtonClick }: HeaderProps) => {
  const handleGoBack = () => {
    onBackButtonClick && onBackButtonClick();
  };

  return (
    <div className="flex flex-row items-center gap-4 px-2">
      {showBackButton && (
        <IconButton onClick={() => handleGoBack()}>
          <ArrowLeftIcon className="size-6" />
        </IconButton>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Header;
