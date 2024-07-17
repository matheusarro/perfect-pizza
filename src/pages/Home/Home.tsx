import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';

function Home() {
  return (
    <div className={'flex h-full w-full flex-col gap-4 md:gap-6'}>
      <Header title={'Montar pizza'} />

      <h2>Selecione um tamanho de pizza</h2>

      {PIZZA_SIZES.map((pizza) => (
        <Card>
          <div className="align-center flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <img
              src="https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg"
              alt="Pequena"
              className="w-full md:w-[200px]"
            />
            <span className={'text-xl font-bold'}>{pizza.size}</span>
            <span className={'text-xl font-bold text-orange-500'}>
              {pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <Button>{'Selecionar'}</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Home;

// MOCK

const PIZZA_SIZES = [
  { size: 'Pequena', price: 20.2 },
  { size: 'Média', price: 30.3 },
  { size: 'Grande', price: 40 },
];
