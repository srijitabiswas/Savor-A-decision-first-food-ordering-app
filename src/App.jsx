import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Landing from './pages/Landing';
import SearchResults from './pages/SearchResults';
import DishDetail from './pages/DishDetail';
import RestaurantPage from './pages/RestaurantPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/dish/:id" element={<DishDetail />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
  <AppShell />
</HashRouter>
    </AppProvider>
  );
}