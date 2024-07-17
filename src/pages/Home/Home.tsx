import Button from '@/components/Button/Button';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartOrder = () => {
    navigate(ROUTES.START.replace(':id', '1'));
  };

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <div>
        <p className={'text-lg font-bold'}>{'Bem-vindo ao Pizza Perfeita!'}</p>
        <p className={'text-lg font-bold'}>{'Peça pizzas únicas e totalmente do seu jeito'}</p>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => handleStartOrder()}>{'Começar pedido'}</Button>
      </div>
    </div>
  );
}

export default Home;
