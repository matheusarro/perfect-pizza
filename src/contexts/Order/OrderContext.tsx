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

export type OrderState = {
  size: PizzaSize | null;
  flavor: PizzaFlavor | null;
  additionals: PizzaAdditional[] | null;
};

type OrderContextType = {
  order: OrderState;
  changeSize: (size: PizzaSize) => void;
  changeFlavor: (size: PizzaFlavor) => void;
  changeAdditionals: (additionals: PizzaAdditional[]) => void;
};

export const OrderContext = createContext<OrderContextType>({} as OrderContextType);

const initialOrderState: OrderState = {
  size: null,
  flavor: null,
  additionals: null,
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderState>(initialOrderState);

  const changeSize = (size: PizzaSize) => {
    setOrder((prev) => ({
      ...prev,
      size: size,
    }));
  };

  const changeFlavor = (size: PizzaFlavor) => {
    setOrder((prev) => ({
      ...prev,
      size: size,
    }));
  };

  const changeAdditionals = (additionals: PizzaAdditional[]) => {
    setOrder((prev) => ({
      ...prev,
      additionals: additionals,
    }));
  };

  return (
    <OrderContext.Provider value={{ order, changeSize, changeFlavor, changeAdditionals }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
