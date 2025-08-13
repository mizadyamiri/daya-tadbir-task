import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../_libs/data-services';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[] | [];
}

const initialState: CartState = { items: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(i => i.id === action.payload.id);

      if (existing) existing.quantity++;
      else state.items = [...state.items, action.payload];
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items
        .map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter(item => item.quantity > 0);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
