import { createContext, ReactNode, useContext, useState } from 'react';

export type PizzaSize = {
  name: string;
  price: number;
  time: number;
};

export type PizzaFlavor = {
  name: string;
  price: number;
  time: number;
};

export type PizzaAdditional = {
  name: string;
  price: number;
  time: number;
};

export type Pizza = {
  itemID: number;
  size: PizzaSize | null;
  flavor: PizzaFlavor | null;
  additionals: PizzaAdditional[] | null;
};

type OrderContextType = {
  order: Pizza[];
  changeSize: (itemID: number, size: PizzaSize) => void;
  changeFlavor: (itemID: number, size: PizzaFlavor) => void;
  changeAdditionals: (itemID: number, additionals: PizzaAdditional[]) => void;
};

export const OrderContext = createContext<OrderContextType>({} as OrderContextType);

const initialOrderState: Pizza[] = [
  {
    itemID: 1,
    size: null,
    flavor: null,
    additionals: null,
  },
];

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Pizza[]>(initialOrderState);

  const changeSize = (itemID: number, size: PizzaSize) => {
    const pizzaToChange: Pizza | undefined = order.find((order) => order.itemID === itemID);

    if (!pizzaToChange) return;

    const unchangedPizzas: Pizza[] = order.filter((order) => order.itemID !== itemID);

    if (unchangedPizzas && pizzaToChange) {
      setOrder([...unchangedPizzas, { ...pizzaToChange, size: size }]);
    }

    if (!unchangedPizzas && pizzaToChange) {
      setOrder([{ ...pizzaToChange, size: size }]);
    }
  };

  const changeFlavor = (itemID: number, flavor: PizzaFlavor) => {
    const pizzaToChange: Pizza | undefined = order.find((order) => order.itemID === itemID);

    if (!pizzaToChange) return;

    const unchangedPizzas: Pizza[] = order.filter((order) => order.itemID !== itemID);

    if (unchangedPizzas && pizzaToChange) {
      setOrder([...unchangedPizzas, { ...pizzaToChange, flavor: flavor }]);
    }

    if (!unchangedPizzas && pizzaToChange) {
      setOrder([{ ...pizzaToChange, flavor: flavor }]);
    }
  };

  const changeAdditionals = (itemID: number, additionals: PizzaAdditional[]) => {
    const pizzaToChange: Pizza | undefined = order.find((order) => order.itemID === itemID);

    if (!pizzaToChange) return;

    const unchangedPizzas: Pizza[] = order.filter((order) => order.itemID !== itemID);

    if (unchangedPizzas && pizzaToChange) {
      setOrder([...unchangedPizzas, { ...pizzaToChange, additionals: additionals }]);
    }

    if (!unchangedPizzas && pizzaToChange) {
      setOrder([{ ...pizzaToChange, additionals: additionals }]);
    }
  };

  return (
    <OrderContext.Provider value={{ order, changeSize, changeFlavor, changeAdditionals }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
