import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { Character } from '../../../graphql/__generated__/graphql';

export interface CharacterWithStatus extends Character {
  Status: string;
}

export interface UpdateAction {
  id: string;
  Status: 'want to watch' | 'watching' | 'watched';
}

const initialState = {
  cart: JSON.parse(localStorage.getItem('Cart') || '[]') as CharacterWithStatus[],
};


export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Character>) => {
      const existingItem = state.cart.find((item: CharacterWithStatus) => item.id === action.payload.id);
      if (existingItem) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Already Added!',
          footer: '<a href="">Why add the same movie twice?</a>',
        });
        return;
      } else {
        const characterWithStatus: CharacterWithStatus = { ...action.payload, Status: 'want to watch' };
        state.cart.push(characterWithStatus);
        localStorage.setItem('Cart', JSON.stringify(state.cart));
        Swal.fire('Add to the cart!', 'Successfully added movie!', 'success');
      }
    },
    updateToCart: (state, action: PayloadAction<UpdateAction>) => {
      console.log(action.payload)
      const updatedMovie = state.cart.find((movie: CharacterWithStatus) => movie.id === action.payload.id);
      if (updatedMovie) {
        updatedMovie.Status = action.payload.Status;
        localStorage.setItem('Cart', JSON.stringify(state.cart));
      }
    },
    deleteToCart: (state, action: PayloadAction<string>) => {
      const updatedCart = state.cart.filter((movie: CharacterWithStatus) => movie.id !== action.payload);
      state.cart = updatedCart;
      localStorage.setItem('Cart', JSON.stringify(state.cart));
      Swal.fire('Deleted!', 'Your Movie has been deleted.', 'success');
    },
  },
});

export const { addToCart, updateToCart, deleteToCart } = counterSlice.actions;

export default counterSlice.reducer;
