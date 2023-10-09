import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  moviescart:[]
}

export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToCart: (state) => {
     
      
    },
    updateTocart: (state) => {
     
    },
    deleteToCart: (state, action: PayloadAction<number>) => {
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateTocart, deleteToCart } = counterSlice.actions

export default counterSlice.reducer