import Button from '@/components/Button/Button';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

function Summary() {
  const { order, addNewPizza } = useOrderContext();
  const navigate = useNavigate();

  const handleNextStep = () => {
    alert('Conferir log');
    console.log(order);
  };

  const handleNewPizza = () => {
    addNewPizza();
    navigate(ROUTES.START.replace(':id', (order.length + 1).toString()));
  };

  const orderTotalPrice = () => {
    let total = 0;

    order.forEach((pizza) => {
      total += (pizza.size?.price || 0) + (pizza.flavor?.price || 0);
      if (pizza.additionals) {
        pizza.additionals.forEach((additional) => {
          total += additional.price;
        });
      }
    });

    return total;
  };

  const orderTotalTime = () => {
    let total = 0;

    order.forEach((pizza) => {
      total += (pizza.size?.time || 0) + (pizza.flavor?.time || 0);
      if (pizza.additionals) {
        pizza.additionals.forEach((additional) => {
          total += additional.time;
        });
      }
    });

    return total;
  };

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

        <div className={'grid w-full grid-cols-3 gap-2'}>
          <span className={'text-lg font-semibold italic'}>Tamanho</span>
          <span className={'text-lg font-semibold italic'}>Sabor</span>
          <span className={'text-lg font-semibold italic'}>Personalizações</span>

          {order.map((pizza) => (
            <Fragment key={pizza.itemID}>
              <span>{pizza.size?.name}</span>
              <span>{pizza.flavor?.name}</span>
              <div className={'flex flex-col'}>
                {pizza.additionals && pizza.additionals?.length > 0
                  ? pizza.additionals?.map((additional) => (
                      <span>
                        {additional.name}
                        {additional.price > 0 &&
                          ` + ${additional.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                      </span>
                    ))
                  : '-'}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className={'flex flex-col gap-4'}>
        <span className={'text-lg font-bold'}>{'Totais do pedido'}</span>

        <div className={'grid w-full grid-cols-2 gap-2'}>
          <span className={'text-lg font-semibold italic'}>Valor</span>
          <span className={'text-lg font-semibold italic'}>Tempo</span>
          <span>{orderTotalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          <span>{orderTotalTime()} minutos</span>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4">
        <Button variant="tertiary" onClick={() => handleNewPizza()}>
          {'Adicionar pizza'}
        </Button>
        <Button onClick={() => handleNextStep()}>{'Finalizar pedido'}</Button>
      </div>
    </div>
  );
}

export default Summary;
