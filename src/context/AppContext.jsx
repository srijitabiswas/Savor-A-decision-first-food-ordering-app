import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext(null);

const initialState = {
  cart:        [],
  searchQuery: '',
  priceRange:  { min: 0, max: 10000 },
  sortBy:      'rating',
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };

    case 'SET_SORT':
      return { ...state, sortBy: action.payload };

    case 'ADD_TO_CART': {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }

    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case 'UPDATE_QTY': {
      const { id, qty } = action.payload;
      if (qty <= 0)
        return { ...state, cart: state.cart.filter((item) => item.id !== id) };
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === id ? { ...item, qty } : item)),
      };
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'RESET_FILTERS':
      return {
        ...state,
        searchQuery: '',
        priceRange: { min: 0, max: 10000 },
        sortBy: 'rating',
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const cartTotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <AppContext.Provider value={{ state, dispatch, cartTotal, cartCount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}