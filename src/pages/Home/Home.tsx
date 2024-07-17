import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import { useOrderContext } from '@/contexts/Order/OrderContext';

function Home() {
  const { order } = useOrderContext();
  console.log(order);

  return (
    <div className={'flex h-full w-full flex-col gap-4 md:gap-6'}>
      <Header title={'Tamanho da pizza'} description={'Escolha o tamanho da sua pizza'} />

      <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
        {PIZZA_OPTIONS.map((pizza, index) => (
          <Card key={index}>
            <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-col">
              <img src={pizza.image_url} alt={pizza.name} className="w-full md:w-[200px]" />

              <div className={'flex flex-row items-baseline gap-2'}>
                <span className={'text-xl font-bold'}>{pizza.name}</span>
                <span className={'text-gray-500'}>{`${pizza.time} min`}</span>
              </div>

              <span className={'text-2xl font-bold text-orange-500'}>
                {pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>

              <Button>{'Selecionar'}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;

// MOCK

const PIZZA_OPTIONS = [
  {
    name: 'Pequena',
    price: 20.2,
    time: 15,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    name: 'Média',
    price: 30.3,
    time: 20,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
  {
    name: 'Grande',
    price: 40,
    time: 25,
    image_url: 'https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg',
  },
];
