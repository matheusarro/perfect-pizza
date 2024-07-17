import Button from '@/components/Button/Button';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const { order } = useOrderContext();
  const navigate = useNavigate();

  const ID = 1;

  const handleNextStep = () => {
    alert('Conferir log');
    console.log(order);
  };

  const disabledNextButton =
    !order.find(({ itemID }) => itemID === ID)?.size || !order.find(({ itemID }) => itemID === ID)?.flavor;

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <Header
        title={'Resumo do pedido'}
        description={'Confira os detalhes do seu pedido'}
        showBackButton
        onBackButtonClick={() => navigate(-1)}
      />

      <div className={'flex flex-col gap-4'}>
        <span className={'text-lg font-bold'}>{'Itens do pedido'}</span>

        <div className={'grid w-full grid-cols-6 gap-2'}>
          <span className={'text-lg font-semibold italic'}>Item</span>
          <span className={'text-lg font-semibold italic'}>Tamanho</span>
          <span className={'text-lg font-semibold italic'}>Sabor</span>
          <span className={'text-lg font-semibold italic'}>Personalizações</span>
          <span className={'text-lg font-semibold italic'}>Valor</span>
          <span className={'text-lg font-semibold italic'}>Tempo</span>

          {order.map((pizza) => (
            <>
              <span>{pizza.itemID}</span>
              <span>{pizza.size?.name}</span>
              <span>{pizza.flavor?.name}</span>
              <span>
                {pizza.additionals && pizza.additionals?.length > 0
                  ? pizza.additionals?.map((additional) => additional.name).join(',')
                  : '-'}
              </span>
              <span>
                {(
                  (pizza.size?.price || 0) +
                  (pizza.flavor?.price || 0) +
                  (pizza.additionals?.reduce((acc, curr) => acc + curr.price, 0) || 0)
                ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
              <span>
                {`${
                  (pizza.size?.time || 0) +
                  (pizza.flavor?.time || 0) +
                  (pizza.additionals?.reduce((acc, curr) => acc + curr.time, 0) || 0)
                } minutos`}
              </span>
            </>
          ))}
        </div>
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
