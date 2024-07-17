import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';

function Additionals() {
  const { order, changeAdditionals } = useOrderContext();
  const navigate = useNavigate();

  const ID = 1;

  const handleAdditionalSelection = (flavor: any) => {
    changeAdditionals(ID, {
      name: flavor.name,
      price: flavor.price,
      time: flavor.time,
    });
  };

  const selectedAdditionals =
    order.find(({ itemID }) => itemID === ID)?.additionals?.map((additional) => additional.name) || [];

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <Header
        title={'Personalizando sua pizza'}
        description={'Escolha os adicionais que desejar para sua pizza'}
        showBackButton
        onBackButtonClick={() => navigate(ROUTES.HOME)}
      />

      <div>
        <span className={'text-lg font-bold'}>{'Adicionais'}</span>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
          {PIZZA_ADDITIONALS_OPTIONS.map((additional, index) => (
            <Card key={index} selected={selectedAdditionals.includes(additional.name)}>
              <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-col">
                <img src={additional.image_url} alt={additional.name} className="w-full md:w-[200px]" />

                <div className={'flex flex-row items-baseline gap-2'}>
                  <span className={'text-xl font-bold'}>{additional.name}</span>
                  {additional.time > 0 && <span className={'text-gray-500'}>{`+${additional.time} min`}</span>}
                  {additional.price > 0 && (
                    <span
                      className={'text-orange-500'}
                    >{`+${additional.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</span>
                  )}
                </div>

                <Button variant={'tertiary'} onClick={() => handleAdditionalSelection(additional)}>
                  {selectedAdditionals.includes(additional.name) ? 'Remover' : 'Selecionar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => console.log(order)}>{'Próximo passo'}</Button>
      </div>
    </div>
  );
}

export default Additionals;

// MOCK

const PIZZA_ADDITIONALS_OPTIONS = [
  {
    id: 1,
    name: 'Extra Bacon',
    price: 3,
    time: 0,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 2,
    name: 'Sem cebola',
    price: 0,
    time: 0,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 3,
    name: 'Borda Recheada',
    price: 5,
    time: 5,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
];
