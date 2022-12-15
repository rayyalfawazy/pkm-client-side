import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Feature/AuthSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})