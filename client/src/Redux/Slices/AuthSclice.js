import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
export const register = createAsyncThunk(
    "/auth/register",
    async ({ formValue, navigate, toast }, { rejectWithValue, getState }) => {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/users/register",
          formValue
        );
        toast.success("Registred Successfully");
        navigate("/");
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
const AuthSclice = createSlice({
    name:'auth',
    initialState:{},
    extraReducers:{
        [register.pending]:(state,action)=>{
            state.loading= true;
            state.appErr=undefined;
            state.serverErr= undefined;
        },
        [register.fulfilled]:(state,action)=>{
            state.newUser= action?.payload;
            state.appErr=undefined;
            state.serverErr= undefined;
        },
        [register.rejected]:(state,action)=>{
            state.loading= false;
            state.appErr=action?.payload?.message;
            state.serverErr= action?.error?.message;
        },
    }
})
export default AuthSclice.reducer;