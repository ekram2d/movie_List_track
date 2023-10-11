import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { Character } from '../../../graphql/__generated__/graphql';


const initialState = {
  cart: JSON.parse(localStorage.getItem('Cart')!) as Character[],
};

export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Character>) => {
      const existingItem = state.cart.find((item: Character) => item.id == action.payload.id);
      if (existingItem) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Already Added!',
          footer: '<a href="">Why add the same movie twice?</a>',
        });
        return;
      } else {
        state.cart.push(action.payload);
        localStorage.setItem('Cart', JSON.stringify(state.cart));
        Swal.fire('Add to the cart!', 'Successfully added movie!', 'success');
      }
    },
    updateToCart: (state, action: PayloadAction<{ id: String; Status: String }>) => {
      const updatedMovie = state.cart.find((movie: Character) => movie.id === action.payload.id);
      if (updatedMovie) {
        updatedMovie.Status = action.payload.Status;
        localStorage.setItem('Cart', JSON.stringify(state.cart));
      }
    },
    deleteToCart: (state, action: PayloadAction<string>) => {
      const updatedCart = state.cart.filter((movie: Character) => movie.id !== action.payload);
      state.cart = updatedCart;
      localStorage.setItem('Cart', JSON.stringify(state.cart));
      Swal.fire('Deleted!', 'Your Movie has been deleted.', 'success');
    },
  },
});

export const { addToCart, updateToCart, deleteToCart } = counterSlice.actions;

export default counterSlice.reducer;
