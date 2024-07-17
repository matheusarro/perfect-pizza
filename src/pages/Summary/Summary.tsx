import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const { order, changeSize, changeFlavor } = useOrderContext();
  const navigate = useNavigate();

  const ID = 1;

  const handleNextStep = () => {
    console.log(order);
  };

  const disabledNextButton =
    !order.find(({ itemID }) => itemID === ID)?.size || !order.find(({ itemID }) => itemID === ID)?.flavor;

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <Header title={'Montando sua pizza'} description={'Escolha o tamanho e o sabor da sua pizza'} />

      <div>
        <span className={'text-lg font-bold'}>{'Tamanhos'}</span>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}></div>
      </div>

      <div className="flex justify-center">
        <Button disabled={disabledNextButton} onClick={() => handleNextStep()}>
          {'Finalizar pedido'}
        </Button>
      </div>
    </div>
  );
}

export default Summary;
