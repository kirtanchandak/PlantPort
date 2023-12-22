import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : { cartItems: [] },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    },

    incrementQuantity: (state, action) => {
      const { slug } = action.payload;
      const item = state.cart.cartItems.find((item) => item.slug === slug);
      if (item) {
        item.quantity++;
        Cookies.set("cart", JSON.stringify({ ...state.cart }));
      }
    },

    decrementQuantity: (state, action) => {
      const { slug } = action.payload;
      const item = state.cart.cartItems.find((item) => item.slug === slug);
      if (item) {
        if (item.quantity === 1) {
          state.cart.cartItems = state.cart.cartItems.filter(
            (item) => item.slug !== slug
          );
        } else {
          item.quantity--;
        }
        Cookies.set("cart", JSON.stringify({ ...state.cart }));
      }
    },

    removeFromCart: (state, action) => {
      const { slug } = action.payload;
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== slug
      );
      state.cart.cartItems = cartItems;
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },

    emptyCart: (state) => {
      state = [];
      Cookies.remove("cartItems");
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
