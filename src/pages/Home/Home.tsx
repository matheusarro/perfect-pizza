import Button from '@/components/Button/Button';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartOrder = () => {
    navigate(ROUTES.START.replace(':id', '1'));
  };

  return (
    <div className={'flex h-full w-full flex-col items-center gap-8 md:gap-12'}>
      <div className={'flex h-full flex-col items-center gap-4'}>
        <p className={'text-2xl font-bold'}>
          Bem-vindo ao <span className={'text-orange-500'}>Pizza Perfeita</span>!
        </p>
        <p className={'text-lg italic'}>{'Peça pizzas únicas e totalmente do seu jeito'}</p>
      </div>

      <img
        src={'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg'}
        alt={'Pizza Perfeita'}
        className="w-full md:w-3/4 lg:w-[400px]"
      />

      <div className="flex justify-center">
        <Button onClick={() => handleStartOrder()}>{'Começar pedido'}</Button>
      </div>
    </div>
  );
}

export default Home;
