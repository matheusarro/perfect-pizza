import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';

function Home() {
  return (
    <div className={'flex h-full w-full flex-col gap-4 md:gap-6'}>
      <Header title={'Montar pizza'} />

      <h2>Selecione um tamanho de pizza</h2>

      <Card>
        <div className="flex flex-col gap-4 md:flex-row">
          <img
            src="https://img.freepik.com/fotos-premium/uma-pizza-com-calabresa-e-cortada-em-oito-fatias_1010706-438.jpg"
            alt="Pequena"
            width={150}
            height={150}
          />
          <span>Tamanho</span>
          <span>R$ 20,20</span>
          <span>Adicionar</span>
        </div>
      </Card>
    </div>
  );
}

export default Home;
