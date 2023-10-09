import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

interface Movie {
      // Define the structure of a movie here
      id: String;
      image: String;
      name: String;
      species: String;
      status: String;
      title: string;
      // Add other properties as needed
}

const initialState = {
      cart: [] as Movie[], // Initialize cart as an array of movies
};

export const counterSlice = createSlice({
      name: 'movies',
      initialState,
      reducers: {
            addToCart: (state, action: PayloadAction<Movie>) => {
                  const existingItem = state.cart.find((item) => item.id === action.payload.id);
                  if (existingItem) {
                        Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Already Added!',
                              footer: '<a href="">Why add same movie twice ?</a>'
                        })
                        return;
                  }
                  else {
                        state.cart.push(action.payload);

                        Swal.fire(
                              'Add to the cart!',
                              'Successfully added movie !',
                              'success'
                        )
                  }
            },
            updateToCart: (state) => {
                  // Implement your update logic here
            },
            deleteToCart: (state, action: PayloadAction<number>) => {
                  // Implement your delete logic here
            },
      },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateToCart, deleteToCart } = counterSlice.actions;

export default counterSlice.reducer;
