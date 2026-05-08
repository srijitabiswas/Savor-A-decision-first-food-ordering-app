import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Profile from './pages/Profile';
import SavedAddresses from './pages/SavedAddresses';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import SettingsPage from './pages/SettingsPage';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/addresses" element={<SavedAddresses />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AppProvider>
  );
}