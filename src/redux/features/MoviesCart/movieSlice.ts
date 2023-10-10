import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

interface Movie {
      id: string;
      image: string;
      name: string;
      species: string;
      status: string;
      title: string;
      Status: string; // Note: Status should match the property name in your data
      // Add other properties as needed
}

const initialState = {
      cart: [] as Movie[],
};

export const counterSlice = createSlice({
      name: 'movies',
      initialState,
      reducers: {
            addToCart: (state, action: PayloadAction<Movie>) => {
                  console.log(state.cart)

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
            updateToCart: (state, action: PayloadAction<{ id: string; Status: string }>) => {
                  const updatedMovie = state.cart.find((movie) => movie.id == action.payload.id);

                  if (updatedMovie) {
                        updatedMovie.Status = action.payload.Status;
                  }
            },
            deleteToCart: (state, action: PayloadAction<string>) => {



                  const updatedCart = state.cart.filter((movie) => movie.id !== action.payload);

                  state.cart = updatedCart;

                  Swal.fire(
                        'Deleted!',
                        'Your Movie has been deleted.',
                        'success'
                  )


            },

      },
});

export const { addToCart, updateToCart, deleteToCart } = counterSlice.actions;

export default counterSlice.reducer;
