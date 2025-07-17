import { Product } from "@/app/_libs/data-services";
import { createStore } from "zustand/vanilla";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[] | [];
}

export interface CartActions {
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

export type CartStore = CartState & CartActions;

export const initCartStore = (): CartState => {
  return { items: [] };
};

export const defaultInitState: CartState = { items: [] };

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(set => ({
    ...initState,
    addItem: item =>
      set(state => {
        const existing = state.items.find(i => i.id === item.id);

        if (existing) {
          return {
            items: state.items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          };
        }

        return { items: [...state.items, item] };
      }),
    removeItem: id =>
      set(state => {
        return {
          items: state.items
            .map(item =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0),
        };
      }),
  }));
};

// export const useCartStore = create<CartStore>()(
//   persist(
//     set => ({
//     }),
//     { name: "cart" }
//   )
// );
