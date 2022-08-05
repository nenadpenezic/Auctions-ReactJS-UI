import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginToAcc = createAsyncThunk(
    "account/login",
    async ()=>{
      return await fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
      );
    }
)

const initialState = {
  user: {},
  errormsg:''
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  extraReducers: {
    [loginToAcc.fulfilled]: (state,action) => {
        state.user=action.payload
        state.errormsg=''
    },

    [loginToAcc.rejected]:(state,action) => {
      state.errormsg='rejected'
    },
  },
  logout: (state) => {
    state.user={}
    state.errormsg=''
}
})

export const { logout } = accountSlice.actions

export default accountSlice.reducer