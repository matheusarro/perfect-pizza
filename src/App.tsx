import { OrderProvider } from './contexts/Order/OrderContext';
import AppRouterProvider from './contexts/Router/RouterContext';

function App() {
  return (
    <>
      <OrderProvider>
        <AppRouterProvider />
      </OrderProvider>
    </>
  );
}

export default App;
