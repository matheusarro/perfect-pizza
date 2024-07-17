import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';
import { ROUTES } from '@/contexts/Router/routes';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { order, changeSize, changeFlavor } = useOrderContext();
  const navigate = useNavigate();

  const ID = 1;

  const handleSizeSelection = (size: any) => {
    changeSize(ID, {
      name: size.name,
      price: size.price,
      time: size.time,
    });
  };

  const handleFlavorSelection = (flavor: any) => {
    changeFlavor(ID, {
      name: flavor.name,
      price: flavor.price,
      time: flavor.time,
    });
  };

  const handleNextStep = () => {
    navigate(ROUTES.CUSTOMIZATION);
  };

  const disabledNextButton =
    !order.find(({ itemID }) => itemID === ID)?.size || !order.find(({ itemID }) => itemID === ID)?.flavor;

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <Header title={'Montando sua pizza'} description={'Escolha o tamanho e o sabor da sua pizza'} />

      <div>
        <span className={'text-lg font-bold'}>{'Tamanhos'}</span>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
          {PIZZA_SIZE_OPTIONS.map((size, index) => (
            <Card key={index} selected={order.find(({ itemID }) => itemID === ID)?.size?.name === size.name}>
              <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-col">
                <div className={'flex flex-row items-baseline gap-2'}>
                  <span className={'text-xl font-bold'}>{size.name}</span>
                  <span className={'text-gray-500'}>{`${size.time} min`}</span>
                </div>

                <span className={'text-2xl font-bold text-orange-500'}>
                  {size.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>

                <Button variant={'tertiary'} onClick={() => handleSizeSelection(size)}>
                  {'Selecionar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <span className={'text-lg font-bold'}>{'Sabores'}</span>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
          {PIZZA_FLAVORS_OPTIONS.map((flavor, index) => (
            <Card key={index} selected={order.find(({ itemID }) => itemID === ID)?.flavor?.name === flavor.name}>
              <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-col">
                <img src={flavor.image_url} alt={flavor.name} className="w-full md:w-[200px]" />

                <div className={'flex flex-row items-baseline gap-2'}>
                  <span className={'text-xl font-bold'}>{flavor.name}</span>
                  {flavor.time > 0 && <span className={'text-gray-500'}>{`+${flavor.time} min`}</span>}
                  {flavor.price > 0 && (
                    <span
                      className={'text-orange-500'}
                    >{`+${flavor.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</span>
                  )}
                </div>

                <Button variant={'tertiary'} onClick={() => handleFlavorSelection(flavor)}>
                  {'Selecionar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button disabled={disabledNextButton} onClick={() => handleNextStep()}>
          {'Próximo passo'}
        </Button>
      </div>
    </div>
  );
}

export default Home;

// MOCK

const PIZZA_SIZE_OPTIONS = [
  {
    id: 1,
    name: 'Pequena',
    price: 20.2,
    time: 15,
  },
  {
    id: 2,
    name: 'Média',
    price: 30.3,
    time: 20,
  },
  {
    id: 3,
    name: 'Grande',
    price: 40,
    time: 25,
  },
];

const PIZZA_FLAVORS_OPTIONS = [
  {
    id: 1,
    name: 'Calabresa',
    price: 0,
    time: 0,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 2,
    name: 'Marguerita',
    price: 0,
    time: 0,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 3,
    name: 'Portuguesa',
    price: 0,
    time: 5,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
];
