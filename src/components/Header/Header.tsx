import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-row items-center gap-4">
      {showBackButton && (
        <IconButton onClick={handleGoBack}>
          <ArrowLeftIcon className="size-6" />
        </IconButton>
      )}
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
