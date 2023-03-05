import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// create a slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, { payload }) => {
      const target = state.list.find((product) => product.pid === payload.pid);
      if (target) {
        return {
          list: state.list.map((product) =>
            product.pid === target.pid
              ? { ...product, quantity: product.quantity + payload.quantity }
              : product
          ),
        };
      }
      return { list: [{ ...payload }, ...state.list] };
    },
    reduce: (state, { payload }) => {
      const target = state.list.find((product) => product.pid === payload.pid);
      if (target) {
        return {
          list: state.list.map((product) =>
            product.pid === target.pid
              ? { ...product, quantity: product.quantity - payload.quantity }
              : product
          ),
        };
      }
    },
    remove: (state, { payload }) => {
      return { list: state.list.filter(({ pid }) => pid !== payload.pid) };
    },
    reset: () => {
      return { list: [] };
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const { add, reduce, remove, reset } = cartSlice.actions;
