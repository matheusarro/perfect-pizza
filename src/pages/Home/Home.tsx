import Button from '@/components/Button/Button';
import { ArrowDownIcon } from '@heroicons/react/16/solid';

function Home() {
  return (
    <>
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
