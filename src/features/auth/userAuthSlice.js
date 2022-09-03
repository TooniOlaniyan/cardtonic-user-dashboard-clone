import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {},
  isLoading: false,


};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers:{

  },
  extraReducers: () => {

  }
  
})

export default userAuthSlice.reducer

