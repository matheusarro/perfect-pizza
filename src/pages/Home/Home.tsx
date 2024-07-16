import Button from '@/components/Button/Button';
import NavBar from '@/components/NavBar/NavBar';
import { ArrowDownIcon } from '@heroicons/react/16/solid';

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-full w-full flex-row gap-4 bg-red-100">
        <Button variant="primary" icon={<ArrowDownIcon className="size-6" />}>
          Botão Primário
        </Button>
        <Button variant="secondary">Botão Secundário</Button>
        <Button variant="tertiary">Botão Terciário</Button>
      </div>
    </>
  );
}

export default Home;
