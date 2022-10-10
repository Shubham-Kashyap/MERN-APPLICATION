import { configureStore } from '@reduxjs/toolkit'
import { dataReducer, chatReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        authReducer: dataReducer,
        chatReducer: chatReducer
    },
})