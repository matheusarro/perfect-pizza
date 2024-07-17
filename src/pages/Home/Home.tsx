import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';

function Home() {
  const { order, changeSize, changeFlavor } = useOrderContext();
  console.log(order);

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

  return (
    <div className={'flex h-full w-full flex-col gap-8 md:gap-12'}>
      <Header title={'Montando sua pizza'} description={'Escolha o tamanho e o sabor da sua pizza'} />

      <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
        {PIZZA_SIZE_OPTIONS.map((size, index) => (
          <Card key={index}>
            <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-col">
              {/* <img src={size.image_url} alt={size.name} className="w-full md:w-[200px]" /> */}

              <div className={'flex flex-row items-baseline gap-2'}>
                <span className={'text-xl font-bold'}>{size.name}</span>
                <span className={'text-gray-500'}>{`${size.time} min`}</span>
              </div>

              <span className={'text-2xl font-bold text-orange-500'}>
                {size.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>

              <Button onClick={() => handleSizeSelection(size)}>{'Selecionar'}</Button>
            </div>
          </Card>
        ))}
      </div>

      <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
        {PIZZA_FLAVORS_OPTIONS.map((flavor, index) => (
          <Card key={index}>
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

              <Button onClick={() => handleFlavorSelection(flavor)}>{'Selecionar'}</Button>
            </div>
          </Card>
        ))}
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
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 2,
    name: 'Média',
    price: 30.3,
    time: 20,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    id: 3,
    name: 'Grande',
    price: 40,
    time: 25,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
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
